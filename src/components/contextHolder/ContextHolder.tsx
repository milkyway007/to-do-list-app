import { type TaskListProps } from '../../model/interfaces';

import { ContextName } from '../../constants/constants';

import TaskList from '../taskList/TaskList';

/**
 * @param root0 main content props
 * @param root0.context selected app context
 * @param root0.buttonOnClick button on click function
 * @returns Returns a MainContent component.
 */
function ContextHolder({ context }: TaskListProps) {
	return (
		<div className="columns">
			<div className="column is-half is-offset-one-quarter">
				{context &&
					(context.name === ContextName.Today ||
						context.name === ContextName.Upcoming) && (
						<TaskList context={context} />
					)}
			</div>
		</div>
	);
}

export default ContextHolder;
