export const TASK_CONTEXT_CONFIG = {
	AddTask: { label: 'Add task', hasTaskList: false },
	Search: { label: 'Search', hasTaskList: false },
	Today: { label: 'Today', hasTaskList: true },
	Upcoming: { label: 'Upcoming', hasTaskList: true },
	Completed: { label: 'Completed', hasTaskList: false },
	Tags: { label: 'Tags', hasTaskList: false },
} as const;

export type TaskContextName = keyof typeof TASK_CONTEXT_CONFIG;
