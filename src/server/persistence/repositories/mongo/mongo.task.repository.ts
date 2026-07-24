import { type Task } from '../../../domain/task.entity.ts';

import { type TaskCreateInput } from '../../../application/inputs/task/task.create.input.ts';
import { type ITaskRepository } from '../../../domain.interfaces/repositories/task.repository.interface.ts';
import { TaskMapper } from '../../mappers/task.mapper.ts';

import { TaskModel } from '../../models/task.model.ts';

export class MongoTaskRepository implements ITaskRepository {
	public async exists(): Promise<boolean> {
		const result = await TaskModel.exists({});

		return result !== null;
	}

	public count(): Promise<number> {
		return TaskModel.countDocuments().exec();
	}

	public async insertMany(tasks: TaskCreateInput[]): Promise<Task[]> {
		if (tasks.length === 0) {
			return [];
		}

		const documents = await TaskModel.insertMany(tasks);

		return documents.map(TaskMapper.toDomain);
	}
}
