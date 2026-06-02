import { type ContextViewModel } from './ContextViewModel.js';
import { type TaskListViewModel } from './TaskListViewModel.js';

export interface ContextWithTaskListViewModel extends ContextViewModel {
	taskList: TaskListViewModel;
}
