import { type DayWithTaskViewModel } from './DayWithTaskViewModel';

export interface TaskListViewModel {
	id: string;
	header: string;
	days: DayWithTaskViewModel[];
}
