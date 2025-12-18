import { type ContextNameType, type TaskListHeaderType } from './types';

export interface Context {
	id: string;
	name: ContextNameType;
	taskList?: TaskList;
}

export interface ButtonProps {
	id: string;
	name: ContextNameType;
	className?: string[];
	order: number;
}

export interface Task {
	id: string;
	description: string;
}

export interface Day {
	id: string;
	date: Date;
	tasks?: Task[];
}

export interface TaskList {
	id: string;
	header: TaskListHeaderType;
	overdue?: Task[];
	days: Day[];
}

export interface ButtonOnClickProps {
	buttonOnClick: (button: ButtonProps) => void;
}

export interface TaskListProps extends ButtonOnClickProps {
	context: Context | undefined;
}

export interface DayDataContainerProps {
	date: Date;
}

export interface DayTaskListProps
	extends ButtonOnClickProps,
		DayDataContainerProps {}
