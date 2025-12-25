import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import select from '../../../services/icons/iconSelector';

import { CONTEXT_CONFIG, type ContextName } from '../../../constants/context';

import './IconButton.css';

export interface IconButtonProps {
	id: string;
	contextName: ContextName;
	className?: string[];
}

/**
 * IconButton
 * A reusable button that displays an icon (from FontAwesome) and optional text.
 */
export function IconButton({ contextName, className }: IconButtonProps) {
	return (
		<button
			type="button"
			className={`button icon-button has-no-border ${className?.join(' ') ?? ''}`}
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
