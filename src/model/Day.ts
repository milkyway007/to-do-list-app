import { type Task } from './Task';

export interface Day {
	id: string;
	date: Date;
	tasks: Task[];
}
