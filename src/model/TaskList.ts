import { type Day } from './Day';
import { type Task } from './Task';

export interface TaskList {
	id: string;
	header: string;
	overdue: Task[];
	days: Day[];
}
