import { type ContextViewModel } from './context.view-model.ts';
import { type TaskListViewModel } from './task-list.view-model.ts';

export interface ContextWithTaskListViewModel extends ContextViewModel {
	taskList: TaskListViewModel;
}
