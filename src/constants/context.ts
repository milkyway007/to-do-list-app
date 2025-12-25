import { type Context } from '../model/Context';

import { taskLists } from './taskLists';

export const CONTEXT_CONFIG = {
	AddTask: { label: 'Add task', hasTaskList: false },
	Search: { label: 'Search', hasTaskList: false },
	Today: { label: 'Today', hasTaskList: true },
	Upcoming: { label: 'Upcoming', hasTaskList: true },
	Completed: { label: 'Completed', hasTaskList: false },
	Tags: { label: 'Tags', hasTaskList: false },
} as const;

export type ContextName = keyof typeof CONTEXT_CONFIG;
export type TaskListContextName = {
	[K in ContextName]: (typeof CONTEXT_CONFIG)[K]['hasTaskList'] extends true
		? K
		: never;
}[ContextName];

export const ContextLabel: Record<ContextName, string> = Object.fromEntries(
	Object.entries(CONTEXT_CONFIG).map(([key, value]) => [key, value.label]),
) as Record<ContextName, string>;

export const contexts: Context[] = (
	Object.keys(CONTEXT_CONFIG) as ContextName[]
).map((name) => ({
	id: name, // stable ID
	name,
	taskList: CONTEXT_CONFIG[name].hasTaskList
		? taskLists[name as TaskListContextName]
		: undefined,
}));
