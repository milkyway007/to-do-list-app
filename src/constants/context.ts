import { type Context } from '../model/Context';

import { CONTEXT_CONFIG } from './contextConfig';
import { taskLists } from './taskLists';

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
