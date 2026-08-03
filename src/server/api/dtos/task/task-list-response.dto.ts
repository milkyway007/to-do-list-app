import { type TaskListResponse } from '../../../../shared/contracts/task-list.contract.ts';

import { type Task } from '../../../domain/task.entity.ts';

import { TaskResponseDTO } from './task-response.dto.ts';

/**
 * Represents a task list response returned by the API.
 */
export class TaskListResponseDTO implements TaskListResponse {
	public tasks: TaskResponseDTO[];

	private constructor(tasks: TaskResponseDTO[]) {
		this.tasks = tasks;
	}

	/**
	 * Creates a response DTO from domain entities.
	 * @param tasks The task domain entities.
	 * @returns A task list response DTO.
	 */
	static fromDomain(this: void, tasks: Task[]): TaskListResponseDTO {
		return new TaskListResponseDTO(tasks.map(TaskResponseDTO.fromDomain));
	}
}
