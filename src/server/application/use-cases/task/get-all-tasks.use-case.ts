import { type Task } from '../../../domain/task.entity.ts';

import { type ITaskRepository } from '../../../domain.interfaces/repositories.interfaces/task.repository.interface.ts';

/**
 * Handles the use case of retrieving all tasks.
 */
export class GetAllTasksUseCase {
	private readonly taskRepository: ITaskRepository;

	/**
	 * Creates a new get all tasks use case.
	 * @param taskRepository The repository used to retrieve tasks.
	 */
	constructor(taskRepository: ITaskRepository) {
		this.taskRepository = taskRepository;
	}

	/**
	 * Retrieves all tasks from the repository.
	 * @returns A list of all tasks.
	 */
	async execute(): Promise<Task[]> {
		return this.taskRepository.getAll();
	}
}
