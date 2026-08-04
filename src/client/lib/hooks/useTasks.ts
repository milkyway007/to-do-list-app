import { useQuery } from '@tanstack/react-query';

import { type TaskListResponse } from '../../../shared/contracts/task-list.contract.ts';

import { TaskDayMapper } from '../../features/tasks/mappers/task-day.mapper.ts';

import agent from '../api/agent.ts';

/**
 * Fetches tasks and transforms them into UI view models.
 * @returns Object containing the task list and loading state.
 */
export const useTasks = () => {
	const { data: tasks, isPending } = useQuery({
		queryKey: ['tasks'],
		queryFn: async () => {
			const response = await agent.get<TaskListResponse>('/tasks');

			const viewModels = TaskDayMapper.toViewModels(response.data.tasks);

			return viewModels;
		},
		staleTime: 1000 * 60 * 5,
	});

	return {
		tasks,
		isPending,
	};
};
