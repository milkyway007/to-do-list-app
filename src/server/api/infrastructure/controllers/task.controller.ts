import { type Request, type Response } from 'express';

import { GetTaskListQuery } from '../../../application/tasks/queries/get-task-list.query.ts';

import { TaskResponseDTO } from '../../dtos/task/task-response.dto.ts';

import { BaseApiController } from './base-api.controller.ts';

/**
 * Handles HTTP requests related to tasks.
 */
export class TaskController extends BaseApiController {
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
