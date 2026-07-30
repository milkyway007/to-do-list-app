import { type TaskDayViewModel } from '../model/task-day.view-model.ts';

import { type TaskResponse } from '../../../../shared/contracts/task.contract.ts';
import { TaskMapper } from './task.mapper.ts';

/**
 * Maps task collections into day-based view models.
 */
export class TaskDayMapper {
	/**
	 * Groups tasks by deadline date and creates day view models.
	 * @param tasks Task response DTO collection.
	 * @returns Collection of task day view models.
	 */
	static toViewModels(tasks: TaskResponse[]): TaskDayViewModel[] {
		const groupedTasks = tasks.reduce<Record<string, TaskResponse[]>>(
			(groups, task) => {
				const date = new Date(task.deadline);
				const key = date.toISOString().split('T')[0];

				if (!groups[key]) {
					groups[key] = [];
				}

				groups[key].push(task);

				return groups;
			},
			{},
		);

		return Object.entries(groupedTasks).map(([key, tasks]) => {
			const date = new Date(key);

			return {
				id: key,
				date,
				header: TaskDayMapper.formatHeader(date),
				tasks: tasks.map(TaskMapper.toViewModel),
			};
		});
	}

	/**
	 * Creates a human-readable date header.
	 * @param date Task date.
	 * @returns Formatted date string.
	 */
	private static formatHeader(this: void, date: Date): string {
		return date.toLocaleDateString('en-US', {
			weekday: 'long',
			day: 'numeric',
			month: 'long',
		});
	}
}
