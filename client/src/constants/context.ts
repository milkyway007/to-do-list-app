import { type ContextViewModel } from '../model/viewModel/ContextViewModel.ts';

import { CONTEXT_CONFIG } from './contextConfig.ts';
import { taskLists } from './taskLists.ts';

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
