import { type CreateTaskInput } from '../../../application/inputs/task/create-task.input.ts';

import { type Task } from '../../../domain/task.entity.ts';

import { type ITaskRepository } from '../../../domain.interfaces/repositories.interfaces/task.repository.interface.ts';

import { TaskMapper } from '../../mappers/task.mapper.ts';

import { TaskModel } from '../../models/task.model.ts';

export class MongoTaskRepository implements ITaskRepository {
	public async getAll(): Promise<Task[]> {
		return await TaskModel.find({});
	}

	public async exists(): Promise<boolean> {
		const result = await TaskModel.exists({});

		return result !== null;
	}

	public count(): Promise<number> {
		return TaskModel.countDocuments().exec();
	}

	public async insertMany(tasks: CreateTaskInput[]): Promise<Task[]> {
		if (tasks.length === 0) {
			return [];
		}

		const documents = await TaskModel.insertMany(tasks);

		return documents.map(TaskMapper.toDomain);
	}
}
