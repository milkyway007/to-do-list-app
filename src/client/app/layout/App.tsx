import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import axios from 'axios';

import { type TaskListResponse } from '../../../shared/contracts/task-list.contract.ts';

import { TaskContextView } from '../../features/tasks/components/TaskContextView/TaskContextView.tsx';
import {
	TASK_CONTEXT_CONFIG,
	type TaskContextName,
} from '../../features/tasks/config/task-context.config.ts';
import { TASK_CONTEXT_MENU_ORDER } from '../../features/tasks/config/task-context-menu.config.ts';
import { TaskDayMapper } from '../../features/tasks/mappers/task-day.mapper.ts';

import { IconButton } from '../components/IconButton/IconButton.tsx';
import { Modal } from '../components/Modal/Modal.tsx';
import { VerticalMenu } from '../components/VerticalMenu/VerticalMenu.tsx';

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

	const [error, setError] = useState<Error | null>(null);

	const { data: tasks, isPending } = useQuery({
		queryKey: ['tasks'],
		queryFn: async () => {
			const response = await axios.get<TaskListResponse>(
				'http://localhost:3000/api/tasks',
			);

			const viewModels = TaskDayMapper.toViewModels(response.data.tasks);

			return viewModels;
		},
	});

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
				<ContentWrapper isLoading={isPending}>
					{tasks &&
						!isPending &&
						selectedContextName &&
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
