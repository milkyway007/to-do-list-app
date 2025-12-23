import {
	type Context,
	type TaskList,
	type VerticalMenuButtonProps,
} from '../model/interfaces';

export const ButtonName = {
	AddTask: 'Add task',
	Search: 'Search',
	Today: 'Today',
	Upcoming: 'Upcoming',
	Completed: 'Completed',
	Tags: 'Tags',
} as const;

export const ContextName = {
	AddTask: 'AddTask',
	Search: 'Search',
	Today: 'Today',
	Upcoming: 'Upcoming',
	Completed: 'Completed',
	Tags: 'Tags',
} as const;

export const TaskListHeader = {
	Today: 'Today',
	Upcoming: 'Upcoming',
} as const;

export const taskLists: TaskList[] = [
	{
		id: 'f22a1a18-7191-461c-a179-75906bce7785',
		header: TaskListHeader.Today,
		days: [
			{
				id: '70b62ff0-da84-4746-94fb-d852b2c32f2e',
				date: new Date(2025, 11, 18),
				tasks: [],
			},
		],
		overdue: [],
	},
	{
		id: 'ddb81a5b-cae8-4d86-b0ec-3dcebccba6d5',
		header: TaskListHeader.Upcoming,
		days: [
			{
				id: '09cd4f4f-216f-4a21-a11c-abf2fc9f199d',
				date: new Date(2025, 11, 18),
				tasks: [],
			},
		],
		overdue: [],
	},
];

export const contexts: Context[] = [
	{
		id: '8eee80d0-b92f-4b8a-bd57-31c10ab90fdb',
		name: ContextName.AddTask,
	},
	{
		id: 'b983612d-51fc-418a-bfc1-5dbb8ff9e213',
		name: ContextName.Search,
	},
	{
		id: '6d16f1c5-0764-4142-a491-a0e26e96b92f',
		name: ContextName.Today,
		taskList: taskLists.find((list) => list.header === TaskListHeader.Today),
	},
	{
		id: '60b6e653-ec59-4527-b5d3-0bff0083a34b',
		name: ContextName.Upcoming,
	},
	{
		id: '9c230573-4271-4eca-b6b5-5529c2ec441a',
		name: ContextName.Completed,
	},
	{
		id: '2216d650-af91-44a8-85e7-c166dd3d8283',
		name: ContextName.Tags,
	},
];

export const verticalMenuButtons: VerticalMenuButtonProps[] = [
	{
		id: '46ec9fb7-88bb-42b7-b033-222ad4b930c5',
		name: ButtonName.AddTask,
		className: ['hover-bg-grey-lighter'],
		order: 1,
		contextName: ContextName.AddTask,
	},
	{
		id: 'c4649910-414e-44bc-b996-bd36a3941efc',
		name: ButtonName.Search,
		className: ['hover-bg-grey-lighter'],
		order: 2,
		contextName: ContextName.Search,
	},
	{
		id: '84c34d29-522c-49fc-b169-537c3040aac6',
		name: ButtonName.Today,
		className: ['hover-bg-grey-lighter'],
		order: 3,
		contextName: ContextName.Today,
	},
	{
		id: 'c04e85ee-a64b-4ce3-86c0-53055200a0cf',
		name: ButtonName.Upcoming,
		className: ['hover-bg-grey-lighter'],
		order: 4,
		contextName: ContextName.Upcoming,
	},
	{
		id: 'bbfca7f7-ac55-493c-ba72-825c8cee097c',
		name: ButtonName.Completed,
		className: ['hover-bg-grey-lighter'],
		order: 5,
		contextName: ContextName.Completed,
	},
	{
		id: '28ee9bcc-dcfe-49c2-8b52-b512879a6317',
		name: ButtonName.Tags,
		className: ['hover-bg-grey-lighter'],
		order: 6,
		contextName: ContextName.Tags,
	},
];
