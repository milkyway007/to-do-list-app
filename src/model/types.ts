import {
	type ButtonName,
	TaskListHeader,
	Weekday,
} from '../constants/constants';

export type ButtonNameType = (typeof ButtonName)[keyof typeof ButtonName];

export type TaskListHeaderType =
	(typeof TaskListHeader)[keyof typeof TaskListHeader];

export type WeekdayType = (typeof Weekday)[keyof typeof Weekday];
