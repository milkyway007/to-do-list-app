import { type Task } from '../../../domain/task.entity.ts';

import { type ITaskRepository } from '../../../domain.interfaces/repositories.interfaces/task.repository.interface.ts';

import { type IRequestHandler } from '../../mediator/request-handler.ts';

import { type GetTaskListQuery } from './get-task-list.query.ts';

/**
 * Handles retrieving all tasks from the repository.
 */
export class GetTaskListHandler implements IRequestHandler<
	GetTaskListQuery,
	Task[]
> {
	private readonly taskRepository: ITaskRepository;

	/**
	 * Creates a new task list query handler.
	 * @param taskRepository The repository used to retrieve tasks.
	 */
	constructor(taskRepository: ITaskRepository) {
		this.taskRepository = taskRepository;
	}

	/**
	 * Executes the task list query.
	 * @returns A list of tasks.
	 */
	async handle(): Promise<Task[]> {
		return this.taskRepository.getAll();
	}
}
