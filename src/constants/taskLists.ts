import { type TaskListViewModel } from '../model/viewModel/TaskListViewModel';

import { type TaskListContextName } from './context';
import { CONTEXT_CONFIG } from './contextConfig';

export const taskLists: Record<TaskListContextName, TaskListViewModel> = {
	Today: {
		id: 'f22a1a18-7191-461c-a179-75906bce7785',
		header: CONTEXT_CONFIG.Today.label,
		days: [
			{
				id: '70b62ff0-da84-4746-94fb-d852b2c32f2e',
				date: new Date(2025, 11, 18),
				tasks: [],
			},
		],
	},

	Upcoming: {
		id: 'ddb81a5b-cae8-4d86-b0ec-3dcebccba6d5',
		header: CONTEXT_CONFIG.Upcoming.label,
		days: [
			{
				id: '09cd4f4f-216f-4a21-a11c-abf2fc9f199d',
				date: new Date(2025, 11, 18),
				tasks: [],
			},
		],
	},
};
