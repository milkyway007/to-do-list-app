import { type ContextViewModel } from '../model/view-model/context.view-model.ts';

import { CONTEXT_CONFIG } from './context-config.ts';
import { taskLists } from './task-lists.ts';

export type ContextName = keyof typeof CONTEXT_CONFIG;
export type TaskListContextName = {
	[K in ContextName]: (typeof CONTEXT_CONFIG)[K]['hasTaskList'] extends true
		? K
		: never;
}[ContextName];

export const ContextLabel: Record<ContextName, string> = Object.fromEntries(
	Object.entries(CONTEXT_CONFIG).map(([key, value]) => [key, value.label]),
) as Record<ContextName, string>;

export const contexts: ContextViewModel[] = (
	Object.keys(CONTEXT_CONFIG) as ContextName[]
).map((name) => ({
	id: name, // stable ID
	name,
	taskList: CONTEXT_CONFIG[name].hasTaskList
		? taskLists[name as TaskListContextName]
		: undefined,
}));
