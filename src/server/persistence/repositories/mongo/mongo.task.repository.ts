import { type CreateTaskInput } from '../../../application/inputs/task/create-task.input.ts';

import { type Task } from '../../../domain/task.entity.ts';

import { type ITaskRepository } from '../../../domain.interfaces/repositories.interfaces/task.repository.interface.ts';

import { TaskMapper } from '../../mappers/task.mapper.ts';

import { TaskModel } from '../../models/task.model.ts';

/**
 * Provides persistence operations for tasks using MongoDB via Mongoose.
 */
export class MongoTaskRepository implements ITaskRepository {
	/**
	 * Retrieves all tasks from the repository.
	 * @returns A list of all tasks stored in the repository.
	 */
	public async getAll(): Promise<Task[]> {
		return await TaskModel.find({});
	}

	/**
	 * Determines whether the repository contains at least one task.
	 * @returns True if at least one task exists, otherwise false.
	 */
	public async exists(): Promise<boolean> {
		const result = await TaskModel.exists({});

		return result !== null;
	}

	/**
	 * Returns the total number of tasks in the repository.
	 * @returns The number of tasks stored in the repository.
	 */
	public count(): Promise<number> {
		return TaskModel.countDocuments().exec();
	}

	/**
	 * Inserts multiple tasks into the repository.
	 * @param tasks Tasks to insert.
	 * @returns The inserted tasks.
	 */
	public async insertMany(tasks: CreateTaskInput[]): Promise<Task[]> {
		if (tasks.length === 0) {
			return [];
		}

		const documents = await TaskModel.insertMany(tasks);

		return documents.map(TaskMapper.toDomain);
	}
}
