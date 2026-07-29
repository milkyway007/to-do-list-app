import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { type ContextName } from '../../../constants/context.ts';
import { CONTEXT_CONFIG } from '../../../constants/context-config.ts';

import select from '../../../services/icons/icon.selector.ts';

import './IconButton.css';

export interface IconButtonProps {
	contextName: ContextName;
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
					<FontAwesomeIcon icon={select(contextName)} />
				</span>
				<span>{CONTEXT_CONFIG[contextName].label}</span>
			</span>
		</button>
	);
}
