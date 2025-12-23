import {
	ButtonName,
	ContextName,
	TaskListHeader,
} from '../constants/constants';

export type ButtonNameType = (typeof ButtonName)[keyof typeof ButtonName];

export type ContextNameType = (typeof ContextName)[keyof typeof ContextName];

export type TaskListHeaderType =
	(typeof TaskListHeader)[keyof typeof TaskListHeader];
