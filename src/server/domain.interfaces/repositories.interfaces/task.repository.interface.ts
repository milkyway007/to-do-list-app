import { type CreateTaskInput } from '../../application/inputs/task/create-task.input.ts';

import { type Task } from '../../domain/task.entity.ts';

export interface ITaskRepository {
	count(): Promise<number>;
	exists(): Promise<boolean>;
	insertMany(tasks: CreateTaskInput[]): Promise<Task[]>;
	getAll(): Promise<Task[]>;
}
