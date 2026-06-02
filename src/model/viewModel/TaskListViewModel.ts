import { type DayWithTaskViewModel } from './DayWithTaskViewModel.js';

export interface TaskListViewModel {
	id: string;
	header: string;
	days: DayWithTaskViewModel[];
}
