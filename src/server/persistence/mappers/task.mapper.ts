import { type Task } from '../../domain/task.entity.ts';

import { type TaskDocument } from '../models/task.model.ts';

/**
 * Maps task entities between domain models and persistence models.
 */
export class TaskMapper {
	/**
	 * Converts a persistence model into a domain entity.
	 * @param model The task document retrieved from the database.
	 * @returns A task domain entity.
	 */
	static toDomain(this: void, model: TaskDocument): Task {
		return {
			id: model._id.toString(),
			title: model.title,
			description: model.description,
			deadline: model.deadline,
		};
	}

	/**
	 * Converts a domain entity into a persistence model.
	 * @param task The task domain entity to convert.
	 * @returns A persistence model suitable for storage.
	 */
	static toPersistence(this: void, task: Task) {
		return {
			title: task.title,
			description: task.description,
			deadline: task.deadline,
		};
	}
}
