import { type Request, type Response } from 'express';

import { type GetAllTasksUseCase } from '../../../application/use-cases/task/get-all-tasks.use-case.ts';

/**
 *
 */
export class TaskController {
	private readonly getAllTasksUseCase: GetAllTasksUseCase;

	/**
	 *
	 * @param getAllTasksUseCase
	 */
	constructor(getAllTasksUseCase: GetAllTasksUseCase) {
		this.getAllTasksUseCase = getAllTasksUseCase;
	}

	/**
	 *
	 * @param _
	 * @param res
	 */
	public async getAll(_: Request, res: Response): Promise<void> {
		const tasks = await this.getAllTasksUseCase.execute();

		res.json(tasks);
	}
}
