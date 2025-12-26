import { type TaskViewModel } from './TaskViewModel';

export interface DayWithTaskViewModel {
	id: string;
	date: Date;
	tasks: TaskViewModel[];
}
