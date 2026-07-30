import { type TaskContextName } from './task-context.config.ts';

export const TASK_CONTEXT_MENU_ORDER = [
	'AddTask',
	'Search',
	'Today',
	'Upcoming',
	'Completed',
	'Tags',
] as const satisfies readonly TaskContextName[];
