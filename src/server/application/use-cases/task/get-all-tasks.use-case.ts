import { type Task } from '../../../domain/task.entity.ts';

import { type ITaskRepository } from '../../../domain.interfaces/repositories.interfaces/task.repository.interface.ts';

export class GetAllTasksUseCase {
	private readonly taskRepository: ITaskRepository;

	constructor(taskRepository: ITaskRepository) {
		this.taskRepository = taskRepository;
	}

	async execute(): Promise<Task[]> {
		return this.taskRepository.getAll();
	}
}
