import { type TaskViewModel } from './TaskViewModel.ts';

export interface DayWithTaskViewModel {
	id: string;
	date: Date;
	tasks: TaskViewModel[];
}
