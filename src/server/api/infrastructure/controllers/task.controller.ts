import { type Request, type Response } from 'express';

import { type Mediator } from '../../../application/mediator/mediator.ts';
import { GetTaskListQuery } from '../../../application/tasks/queries/get-task-list.query.ts';

import { TaskResponseDTO } from '../../dtos/task/task-response.dto.ts';

/**
 * Handles HTTP requests related to tasks.
 */
export class TaskController {
	private readonly mediator: Mediator;

	/**
	 * Creates a new task controller.
	 * @param mediator The mediator used to dispatch application requests.
	 */
	constructor(mediator: Mediator) {
		this.mediator = mediator;
	}

	/**
	 * Handles a request to retrieve all tasks.
	 * @param _ Unused HTTP request object.
	 * @param res The HTTP response object used to send the task list.
	 */
	public async getAll(_: Request, res: Response): Promise<void> {
		const tasks = await this.mediator.send(new GetTaskListQuery());

		res.json(tasks.map(TaskResponseDTO.fromDomain));
	}
}
