import { type Task } from '../../domain/task.entity.ts';

import { type TaskCreateInput } from '../../application/inputs/task/task.create.input.ts';

export interface ITaskRepository {
	count(): Promise<number>;
	exists(): Promise<boolean>;
	insertMany(tasks: TaskCreateInput[]): Promise<Task[]>;
}
