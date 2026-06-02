import { type TaskViewModel } from './TaskViewModel.js';

export interface DayWithTaskViewModel {
	id: string;
	date: Date;
	tasks: TaskViewModel[];
}
