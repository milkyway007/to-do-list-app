import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	TASK_CONTEXT_CONFIG,
	type TaskContextName,
} from '../../../features/tasks/config/task-context.config.ts';
import selectIcon from '../../../features/tasks/utils/task-context-icon.ts';

import './IconButton.css';

export interface IconButtonProps {
	contextName: TaskContextName;
	className?: string[];
	isActive?: boolean;
}

/**
 * Renders a button with an icon and label for a task context.
 * @param props Component properties.
 * @returns The rendered icon button component.
 */
export function IconButton(props: IconButtonProps) {
	const { contextName, className, isActive } = props;
	return (
		<button
			type="button"
			className={`button icon-button has-no-border ${isActive ? 'is-active' : ''} ${className?.join(' ') ?? ''}`}
		>
			<span className="icon-text">
				<span>
					<FontAwesomeIcon icon={selectIcon(contextName)} />
				</span>
				<span>{TASK_CONTEXT_CONFIG[contextName].label}</span>
			</span>
		</button>
	);
}
