import { type ContextViewModel } from './ContextViewModel.ts';
import { type TaskListViewModel } from './TaskListViewModel.ts';

export interface ContextWithTaskListViewModel extends ContextViewModel {
	taskList: TaskListViewModel;
}
