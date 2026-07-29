import { type Task } from '../../../domain/task.entity.ts';

import { type IRequest } from '../../mediator/request.ts';

/**
 * Represents a request to retrieve all tasks.
 */
export class GetTaskListQuery implements IRequest<Task[]> {
	declare readonly resultType: Task[];
}
