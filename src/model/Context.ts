import { type ContextName } from '../constants/context';

import { type TaskList } from './TaskList';

export interface Context {
	id: string;
	name: ContextName;
	taskList?: TaskList;
}
