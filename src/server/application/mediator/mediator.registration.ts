import { type ITaskRepository } from '../../domain.interfaces/repositories.interfaces/task.repository.interface.ts';

import { GetTaskListHandler } from '../tasks/queries/get-task-list.handler.ts';
import { GetTaskListQuery } from '../tasks/queries/get-task-list.query.ts';

import { type Mediator } from './mediator.ts';

/**
 * Registers request handlers in the application mediator.
 * @param mediator The mediator instance used to dispatch requests.
 * @param taskRepository The repository used by task query handlers.
 */
export function registerApplicationHandlers(
	mediator: Mediator,
	taskRepository: ITaskRepository,
): void {
	mediator.register(GetTaskListQuery, new GetTaskListHandler(taskRepository));
}
