import { type Request, type Response } from 'express';

import { type GetAllTasksUseCase } from '../../../application/use-cases/task/get-all-tasks.use-case.ts';

export class TaskController {
	private readonly getAllTasksUseCase: GetAllTasksUseCase;

	constructor(getAllTasksUseCase: GetAllTasksUseCase) {
		this.getAllTasksUseCase = getAllTasksUseCase;
	}

	public async getAll(_: Request, res: Response): Promise<void> {
		const tasks = await this.getAllTasksUseCase.execute();

		res.json(tasks);
	}
}
