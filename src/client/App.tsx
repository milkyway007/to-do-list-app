import { type ReactNode, useEffect, useState } from 'react';

import { IconButton } from './components/controls/IconButton/IconButton.tsx';
import { Modal } from './components/controls/Modal/Modal.tsx';
import { ContentWrapper } from './components/layout/ContentWrapper/ContentWrapper.tsx';
import { DayTaskList } from './components/layout/DayTaskListContainer/DayTaskListContainer.tsx';
import { VerticalMenu } from './components/layout/VerticalMenu/VerticalMenu.tsx';

import { type ContextName } from './constants/context.ts';
import { CONTEXT_CONFIG } from './constants/context-config.ts';
import { verticalMenuButtons } from './constants/vertical-menu.ts';

import { type VerticalMenuButtonProps } from './model/ui/vertical-menu-button.ts';
import { type TaskDayViewModel } from './model/view-model/task-day.view-model.ts';

import { TaskDayMapper } from './services/mappers/task-day.mapper.ts';

import './App.css';

/**
 * Renders the main application component.
 * Manages the selected task context and displays the corresponding task list.
 * @returns The rendered app component.
 */
export function App() {
	const [selectedContextName, setSelectedContextName] =
		useState<ContextName>('Today');

	const [isFetching, setIsFetching] = useState<boolean>(false);
	const [tasks, setTasks] = useState<TaskDayViewModel[]>([]);
	const [error, setError] = useState<Error | null>(null);

	const url = 'http://localhost:3000/api/tasks';
	useEffect(() => {
		async function fetchTasksAsync() {
			setIsFetching(true);

			try {
				const response = await fetch(url);
				const resData = await response.json();
				if (!response.ok) {
					throw new Error('Failed to fetch tasks.');
				}

				const viewModels = TaskDayMapper.toViewModels(resData.tasks);

				setTasks(viewModels);
			} catch (error) {
				if (error instanceof Error) {
					setError(error);
				} else {
					setError(new Error('Unknown error'));
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
	 * @param taskDay The task list associated with the selected context.
	 * @param taskDays
	 * @returns The rendered context layout.
	 */
	function getCurrentContextLayout(
		name: ContextName,
		taskDays: TaskDayViewModel[],
	): ReactNode {
		return (
			<div className="content block task-list-container">
				<div className="task-list-header">
					<h2 className="header mb-5">{CONTEXT_CONFIG[name].label}</h2>
				</div>
				<div className="task-list-body">
					{taskDays.length > 0 && (
						<ul>
							{taskDays.map((taskDay: TaskDayViewModel) => {
								return (
									<li key={taskDay.id}>
										<DayTaskList day={taskDay} />
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</div>
		);
	}

	let currentContext = undefined;
	if (selectedContextName && CONTEXT_CONFIG[selectedContextName].hasTaskList) {
		currentContext = getCurrentContextLayout(selectedContextName, tasks);
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
				title="An error occured"
				message={
					<>
						<strong>Error:</strong>
						<p>{error?.message}</p>
					</>
				}
				onClose={handleModalClose}
			></Modal>

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
				<ContentWrapper isLoading={isFetching}>{currentContext}</ContentWrapper>
			</div>
		</div>
	);
}
