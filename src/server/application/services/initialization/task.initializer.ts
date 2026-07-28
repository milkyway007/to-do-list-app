import { type ITaskRepository } from '../../../domain.interfaces/repositories.interfaces/task.repository.interface.ts';

import { defaultTasks } from './task.seed.ts';

/**
 *
 */
export class TaskInitializer {
	private readonly taskRepository: ITaskRepository;

	/**
	 *
	 * @param taskRepository
	 */
	constructor(taskRepository: ITaskRepository) {
		this.taskRepository = taskRepository;
	}

	/**
	 *
	 */
	public async run(): Promise<void> {
		if (await this.taskRepository.exists()) {
			return;
		}

		await this.taskRepository.insertMany(defaultTasks);
	}
}
