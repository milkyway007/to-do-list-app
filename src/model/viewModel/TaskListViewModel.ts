import type { DayWithTaskViewModel } from "./dayWithTaskViewModel.ts";

export interface TaskListViewModel {
	id: string;
	header: string;
	days: DayWithTaskViewModel[];
}
