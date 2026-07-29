import { type ContextViewModel } from '../../model/view-model/context.view-model.ts';
import { type ContextWithTaskListViewModel } from '../../model/view-model/context-with-task-list.view-model.ts';

/**
 * Determines whether a context contains a task list.
 * @param context The context to check.
 * @returns `true` if the context contains a task list; otherwise, `false`.
 */
export function isContextWithTaskList(
	context: ContextViewModel,
): context is ContextWithTaskListViewModel {
	return 'taskList' in context && context.taskList !== undefined;
}
