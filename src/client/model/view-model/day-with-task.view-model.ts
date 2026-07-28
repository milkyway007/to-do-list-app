import { type TaskViewModel } from './task.view-model.ts';

export interface DayWithTaskViewModel {
	id: string;
	date: Date;
	tasks: TaskViewModel[];
}
