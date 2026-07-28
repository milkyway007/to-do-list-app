import { type TaskViewModel } from './taskViewModel.ts';

export interface DayWithTaskViewModel {
	id: string;
	date: Date;
	tasks: TaskViewModel[];
}
