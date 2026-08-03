import { type TaskResponse } from '../../../../shared/contracts/task.contract.ts';

import { type TaskViewModel } from '../model/task.view-model.ts';

/**
 * Maps task response DTOs to task view models.
 */
export class TaskMapper {
	/**
	 * Converts a task response DTO into a view model.
	 * @param task Task response DTO.
	 * @returns Task view model.
	 */
	static toViewModel(this: void, task: TaskResponse): TaskViewModel {
		return {
			id: task.id,
			title: task.title,
			description: task.description ?? '',
		};
	}
}
