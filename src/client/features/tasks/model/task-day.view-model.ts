import { type TaskViewModel } from './task.view-model.ts';

export interface TaskDayViewModel {
	id: string;
	date: Date;
	header: string;
	tasks: TaskViewModel[];
}
