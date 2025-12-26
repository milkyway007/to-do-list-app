import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import select from '../../../services/icons/iconSelector';

import { type ContextName } from '../../../constants/context';
import { CONTEXT_CONFIG } from '../../../constants/contextConfig';

import './IconButton.css';

export interface IconButtonProps {
	contextName: ContextName;
	className?: string[];
	isActive?: boolean;
}

/**
 * IconButton
 * A reusable button that displays an icon (from FontAwesome) and optional text.
 */
export function IconButton({
	contextName,
	className,
	isActive,
}: IconButtonProps) {
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
