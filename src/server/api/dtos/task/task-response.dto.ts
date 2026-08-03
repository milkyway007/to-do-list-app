import { type TaskResponse } from '../../../../shared/contracts/task.contract.ts';

import { type Task } from '../../../domain/task.entity.ts';

/**
 * Represents a task response returned by the API.
 */
export class TaskResponseDTO implements TaskResponse {
	public id: string;
	public title: string;
	public description?: string;
	public deadline: string;

	private constructor(
		id: string,
		title: string,
		description: string | undefined,
		deadline: string,
	) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.deadline = deadline;
	}

	/**
	 * Creates a response DTO from a domain entity.
	 * @param task The task domain entity.
	 * @returns A task response DTO.
	 */
	static fromDomain(this: void, task: Task): TaskResponseDTO {
		return new TaskResponseDTO(
			task.id,
			task.title,
			task.description,
			task.deadline.toDateString(),
		);
	}
}
