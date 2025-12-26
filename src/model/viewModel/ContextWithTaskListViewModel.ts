import { type ContextViewModel } from './ContextViewModel';
import { type TaskListViewModel } from './TaskListViewModel';

export interface ContextWithTaskListViewModel extends ContextViewModel {
	taskList: TaskListViewModel;
}
