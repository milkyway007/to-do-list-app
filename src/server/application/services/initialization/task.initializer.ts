import { type ITaskRepository } from '../../../domain.interfaces/repositories.interfaces/task.repository.interface.ts';

import { defaultTasks } from './task.seed.ts';

/**
 * Initializes the application with default tasks.
 */
export class TaskInitializer {
	private readonly taskRepository: ITaskRepository;

	/**
	 * Creates a new task initializer.
	 * @param taskRepository The repository used to store and retrieve tasks.
	 */
	constructor(taskRepository: ITaskRepository) {
		this.taskRepository = taskRepository;
	}

	/**
	 * Inserts default tasks if no tasks exist.
	 * @returns A promise that resolves when the initialization is completed.
	 */
	public async run(): Promise<void> {
		if (await this.taskRepository.exists()) {
			return;
		}

		await this.taskRepository.insertMany(defaultTasks);
	}
}
