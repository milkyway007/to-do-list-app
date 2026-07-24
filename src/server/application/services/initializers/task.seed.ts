import { type TaskCreateInput } from '../../inputs/task/create-task.input.ts';

export const defaultTasks: TaskCreateInput[] = [
	{
		title: 'test 1',
		description: 'test 1',
		deadline: new Date(),
	},
	{
		title: 'test 2',
		description: 'test 2',
		deadline: new Date(),
	},
	{
		title: 'test 3',
		description: 'test 3',
		deadline: new Date(),
	},
];
