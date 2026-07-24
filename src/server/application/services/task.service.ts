import { type Task } from '../../domain/task.entity.ts';

import { type ITaskRepository } from '../../domain.interfaces/repositories/task.repository.interface.ts';

export class TaskService {
	private readonly taskRepository: ITaskRepository;

	constructor(taskRepository: ITaskRepository) {
		this.taskRepository = taskRepository;
	}

	async insertMany(tasks: Task[]): Promise<Task[]> {
		return await this.taskRepository.insertMany(tasks);
	}
}
