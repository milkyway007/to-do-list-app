import { type ReactNode } from 'react';

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

export interface VerticalMenuButtonProps {
	order: number;
	contextName: ContextNameType;
	id: string;
	name: ButtonNameType;
	className?: string[];
}

export interface Task {
	id: string;
	title: string;
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

export interface ParentComponentProps {
	children: ReactNode;
}

export interface ContextHolderProps {
	context: Context | undefined;
}
