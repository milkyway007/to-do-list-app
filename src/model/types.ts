import { type ContextName, TaskListHeader } from '../constants/constants';

export type ContextNameType = (typeof ContextName)[keyof typeof ContextName];

export type TaskListHeaderType =
	(typeof TaskListHeader)[keyof typeof TaskListHeader];
