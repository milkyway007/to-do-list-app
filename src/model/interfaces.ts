import { type ButtonNameType, type TaskListHeaderType } from './types';

export interface IconButtonProps {
	name: ButtonNameType;
	className?: string[];
	taskList?: TaskList;
}

export interface Task {
	description: string;
}

export interface Day {
	day: number;
	month: number;
	year: number;
	weekday: string;
	tasks?: Task[];
}

export interface TaskList {
	header: TaskListHeaderType;
	overdue?: Task[];
	days: Day[];
}
