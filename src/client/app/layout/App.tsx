import { useEffect, useState } from 'react';
import axios from 'axios';

import { TaskContextView } from '../../features/tasks/components/TaskContextView/TaskContextView.tsx';
import { IconButton } from '../components/IconButton/IconButton.tsx';
import { Modal } from '../components/Modal/Modal.tsx';
import { VerticalMenu } from '../components/VerticalMenu/VerticalMenu.tsx';

import { type TaskDayViewModel } from '../../features/tasks/model/task-day.view-model.ts';

import { type TaskListResponse } from '../../../shared/contracts/task-list.contract.ts';
import {
	TASK_CONTEXT_CONFIG,
	type TaskContextName,
} from '../../features/tasks/config/task-context.config.ts';
import { TASK_CONTEXT_MENU_ORDER } from '../../features/tasks/config/task-context-menu.config.ts';
import { TaskDayMapper } from '../../features/tasks/mappers/task-day.mapper.ts';
import { ContentWrapper } from './ContentWrapper/ContentWrapper.tsx';

import './styles.css';

/**
 * Renders the main application component.
 * Manages the selected task context and displays the corresponding task list.
 * @returns The rendered app component.
 */
export function App() {
	const [selectedContextName, setSelectedContextName] =
		useState<TaskContextName>('Today');

	const [isFetching, setIsFetching] = useState<boolean>(false);
	const [tasks, setTasks] = useState<TaskDayViewModel[]>([]);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		async function fetchTasksAsync() {
			setIsFetching(true);

			try {
				const response = await axios.get<TaskListResponse>(
					'http://localhost:3000/api/tasks',
				);

				const viewModels = TaskDayMapper.toViewModels(response.data.tasks);

				setTasks(viewModels);
			} catch (error) {
				if (error instanceof Error) {
					setError(error);
				} else {
					setError(new Error('Unknown error'));
				}
			} finally {
				setIsFetching(false);
			}
		}

		void fetchTasksAsync();
	}, []);

	/**
	 * Handles selection of a task context from the vertical menu.
	 * @param contextName The selected task context.
	 */
	function onVerticalMenuButtonClicked(contextName: TaskContextName): void {
		setSelectedContextName(contextName);
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
						{TASK_CONTEXT_MENU_ORDER.map((contextName) => {
							return (
								<li
									key={contextName}
									onClick={() => {
										onVerticalMenuButtonClicked(contextName);
									}}
								>
									<IconButton
										contextName={contextName}
										className={['hover-bg-grey-lighter']}
										isActive={selectedContextName === contextName}
									/>
								</li>
							);
						})}
					</ol>
				</VerticalMenu>
			</div>
			<div className="column">
				<ContentWrapper isLoading={isFetching}>
					{selectedContextName &&
						TASK_CONTEXT_CONFIG[selectedContextName].hasTaskList && (
							<TaskContextView
								name={selectedContextName}
								taskDays={tasks}
							/>
						)}
				</ContentWrapper>
			</div>
		</div>
	);
}
