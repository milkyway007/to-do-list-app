import { type IconButtonProps, type TaskList } from '../model/interfaces';

export const ButtonName = {
	AddTask: 'Add task',
	Search: 'Search',
	Today: 'Today',
	Upcoming: 'Upcoming',
	Completed: 'Completed',
	Tags: 'Tags',
} as const;

export const TaskListHeader = {
	Today: 'Today',
	Upcomin: 'Upcoming',
} as const;

export const Weekday = {
	Monday: 'Monday',
	Tuesday: 'Tuesday',
	Wednesday: 'Wednesday',
	Thursday: 'Thursday',
	Friday: 'Friday',
	Saturday: 'Saturday',
	Sunday: 'Sunday',
} as const;

export const taskLists: TaskList[] = [
	{
		header: TaskListHeader.Today,
		days: [
			{
				day: 17,
				month: 12,
				year: 2025,
				weekday: Weekday.Wednesday,
				tasks: [],
			},
		],
		overdue: [],
	},
	{
		header: TaskListHeader.Upcomin,
		days: [
			{
				day: 17,
				month: 12,
				year: 2025,
				weekday: Weekday.Wednesday,
				tasks: [],
			},
		],
		overdue: [],
	},
];

export const mainMenuListItems: IconButtonProps[] = [
	{
		name: ButtonName.AddTask,
		className: ['hover-bg-grey-lighter'],
	},
	{
		name: ButtonName.Search,
		className: ['hover-bg-grey-lighter'],
	},
	{
		name: ButtonName.Today,
		className: ['hover-bg-grey-lighter'],
		taskList: taskLists.find((list) => list.header === TaskListHeader.Today),
	},
	{
		name: ButtonName.Upcoming,
		className: ['hover-bg-grey-lighter'],
	},
	{
		name: ButtonName.Completed,
		className: ['hover-bg-grey-lighter'],
	},
	{
		name: ButtonName.Tags,
		className: ['hover-bg-grey-lighter'],
	},
];
