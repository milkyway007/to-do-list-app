import { type ContextViewModel } from './contextViewModel.ts';
import { type TaskListViewModel } from './taskListViewModel.ts';

export interface ContextWithTaskListViewModel extends ContextViewModel {
	taskList: TaskListViewModel;
}
