import { type ReactNode, useEffect, useState } from 'react';

import { IconButton } from './components/controls/IconButton/IconButton.tsx';
import { ContentWrapper } from './components/layout/ContentWrapper/ContentWrapper.tsx';
import { DayTaskList } from './components/layout/DayTaskListContainer/DayTaskListContainer.tsx';
import { VerticalMenu } from './components/layout/VerticalMenu/VerticalMenu.tsx';

import { type ContextName, contexts } from './constants/context.ts';
import { CONTEXT_CONFIG } from './constants/context-config.ts';
import { verticalMenuButtons } from './constants/vertical-menu.ts';

import { type VerticalMenuButtonProps } from './model/ui/vertical-menu-button.ts';
import { type ContextViewModel } from './model/view-model/context.view-model.ts';
import { type DayWithTaskViewModel } from './model/view-model/day-with-task.view-model.ts';
import { type TaskViewModel } from './model/view-model/task.view-model.ts';
import { type TaskListViewModel } from './model/view-model/task-list.view-model.ts';

import { isContextWithTaskList } from './services/context/context-with-task-list.validator.ts';

import './App.css';
import { Modal } from './components/controls/Modal/Modal.tsx';

/**
 * Renders the main application component.
 * Manages the selected task context and displays the corresponding task list.
 * @returns The rendered app component.
 */
export function App() {
	const [selectedContextName, setSelectedContextName] =
		useState<ContextName>('Today');

	const [isFetching, setIsFetching] = useState<boolean>(false);
	const [tasks, setTasks] = useState<TaskViewModel[]>([]);
	const [error, setError] = useState<Error | null>(null);

	const url = 'http://localhost:3000/api/tasksss';
	useEffect(() => {
		async function fetchTasksAsync() {
			setIsFetching(true);

			try 
			{
				const response = await fetch(url);
				const resData = await response.json();
				if (!response.ok) {
					throw new Error('Failed to fetch tasks.')
				}

				setTasks(resData.tasks);
				console.log(resData.tasks);
			}
			catch (error)
			{
				if (error instanceof Error) {
					setError(error);
				} else {
					setError(new Error("Unknown error"));
				}
			}

			setIsFetching(false);
		}

		fetchTasksAsync();
	}, []);

	/**
	 * Handles selection of a task context from the vertical menu.
	 * @param contextName The selected task context.
	 */
	function onVerticalMenuButtonClicked(contextName: ContextName): void {
		setSelectedContextName(contextName);
	}

	/**
	 * Creates the layout for the specified task context.
	 * @param name The name of the selected context.
	 * @param taskList The task list associated with the selected context.
	 * @returns The rendered context layout.
	 */
	function getCurrentContextLayout(
		name: ContextName,
		taskList: TaskListViewModel,
	): ReactNode {
		return (
			<div className="content block task-list-container">
				<div className="task-list-header">
					<h2 className="header mb-5">{CONTEXT_CONFIG[name].label}</h2>
				</div>
				<div className="task-list-body">
					{taskList.days.length > 0 && (
						<ul>
							{taskList.days.map((day: DayWithTaskViewModel) => {
								return (
									<li key={day.id}>
										<DayTaskList day={day} />
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</div>
		);
	}

	const selectedContext: ContextViewModel | undefined = contexts.find(
		(x) => x.name === selectedContextName,
	);

	let currentContext = undefined;
	if (selectedContext && isContextWithTaskList(selectedContext)) {
		currentContext = getCurrentContextLayout(
			selectedContextName,
			selectedContext.taskList,
		);
	}

	function handleModalClose() {
        setError(null);
    }

	return (
		<div
			id="app"
			className="columns"
		>
			<Modal
				isOpened={error !== null}
				title='An error occured'
				message={
					<>
						<strong>Error:</strong>
						<p>{error?.message}</p>
					</>
				}
				onClose={handleModalClose} >
			</Modal>

			<div className="column is-2 has-background-white-bis">
				<VerticalMenu>
					<ol className="menu-list">
						{verticalMenuButtons.map((item: VerticalMenuButtonProps) => {
							return (
								<li
									key={item.contextName}
									onClick={() => {
										onVerticalMenuButtonClicked(item.contextName);
									}}
								>
									<IconButton
										{...item}
										isActive={item.contextName === selectedContextName}
									/>
								</li>
							);
						})}
					</ol>
				</VerticalMenu>
			</div>
			<div className="column">
				<ContentWrapper
					isLoading={isFetching}
				>
					{currentContext}
				</ContentWrapper>
			</div>
		</div>
	);
}
