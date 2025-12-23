import {
	type ButtonNameType,
	type ContextNameType,
	type TaskListHeaderType,
} from './types';

export interface Context {
	id: string;
	name: ContextNameType;
	taskList?: TaskList;
}

export interface IconButtonProps {
	id: string;
	name: ButtonNameType;
	className?: string[];
}

export interface VerticalMenuButtonProps extends IconButtonProps {
	order: number;
	context: Context | undefined;
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

export interface VerticalMenuButtonClickedProps {
	buttonClicked: (button: VerticalMenuButtonProps) => void;
}

export interface ContextHolderProps {
	context: Context | undefined;
}

export interface DayTaskListProps {
	day: Day;
}

export interface DayDataContainerProps {
	date: Date;
}

export interface AddDayTaskProps {
	toggleIsAdding: () => void;
}
