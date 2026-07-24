import { type Task } from '../../domain/task.entity.ts';

import { type TaskDocument } from '../models/task.model.ts';

export class TaskMapper {
	static toDomain(this: void, model: TaskDocument): Task {
		return {
			id: model._id.toString(),
			title: model.title,
			description: model.description,
			deadline: model.deadline,
		};
	}

	static toPersistence(this: void, task: Task) {
		return {
			title: task.title,
			description: task.description,
			deadline: task.deadline,
		};
	}
}
