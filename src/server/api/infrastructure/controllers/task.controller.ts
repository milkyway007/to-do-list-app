import { type Request, type Response } from 'express';

import { type GetAllTasksUseCase } from '../../../application/use-cases/task/get-all-tasks.use-case.ts';

import { TaskResponseDTO } from '../../dtos/task/task-response.dto.ts';

/**
 * Handles HTTP requests related to tasks.
 */
export class TaskController {
	private readonly getAllTasksUseCase: GetAllTasksUseCase;

	/**
	 * Creates a new task controller.
	 * @param getAllTasksUseCase The use case used to retrieve tasks.
	 */
	constructor(getAllTasksUseCase: GetAllTasksUseCase) {
		this.getAllTasksUseCase = getAllTasksUseCase;
	}

	/**
	 * Handles a request to retrieve all tasks.
	 * @param _ Unused HTTP request object.
	 * @param res The HTTP response object.
	 */
	public async getAll(_: Request, res: Response): Promise<void> {
		const tasks = await this.getAllTasksUseCase.execute();

		const response = tasks.map(TaskResponseDTO.fromDomain);

		res.json(response);
	}
}
