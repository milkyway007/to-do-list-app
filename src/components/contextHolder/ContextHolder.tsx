import { type ContextHolderProps } from '../../model/interfaces';

import { ContextName } from '../../constants/constants';

import TaskList from '../taskList/TaskList';

/**
 * @returns Returns a ContextHolder component;
 * @param root0 ContextHolderProps;
 * @param root0.context Selected app context.
 */
function ContextHolder({ context }: ContextHolderProps) {
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
