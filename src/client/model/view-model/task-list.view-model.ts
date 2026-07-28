import { type DayWithTaskViewModel } from './day-with-task.view-model.ts';

export interface TaskListViewModel {
	id: string;
	header: string;
	days: DayWithTaskViewModel[];
}
