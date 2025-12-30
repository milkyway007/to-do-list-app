import { type DayWithTaskViewModel } from './DayWithTaskViewModel.ts';

export interface TaskListViewModel {
	id: string;
	header: string;
	days: DayWithTaskViewModel[];
}
