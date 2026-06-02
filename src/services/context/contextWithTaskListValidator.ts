import { type ContextViewModel } from '../../model/viewModel/ContextViewModel.ts';
import { type ContextWithTaskListViewModel } from '../../model/viewModel/ContextWithTaskListViewModel.ts';

/**
 * Type guard to check whether a ContextViewModel object
 * is actually a ContextWithTaskListViewModel with a defined taskList.
 */
export function validate(
	context: ContextViewModel,
): context is ContextWithTaskListViewModel {
	return 'taskList' in context && context.taskList !== undefined;
}
