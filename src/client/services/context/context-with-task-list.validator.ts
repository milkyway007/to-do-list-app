import { type ContextViewModel } from '../../model/view-model/context.view-model.ts';
import { type ContextWithTaskListViewModel } from '../../model/view-model/context-with-task-list.view-model.ts';

/**
 * Type guard to check whether a ContextViewModel object
 * is actually a ContextWithTaskListViewModel with a defined taskList.
 */
export function validate(
	context: ContextViewModel,
): context is ContextWithTaskListViewModel {
	return 'taskList' in context && context.taskList !== undefined;
}
