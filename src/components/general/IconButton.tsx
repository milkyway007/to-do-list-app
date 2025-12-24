import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import select from '../../services/iconSelector';

import { type ButtonNameType } from '../../model/types';

import './IconButton.css';

export interface IconButtonProps {
	id: string;
	name: ButtonNameType;
	className?: string[];
}

/**
 * IconButton
 * A reusable button that displays an icon (from FontAwesome) and optional text.
 */
export function IconButton({ name, className }: IconButtonProps) {
	return (
		<button
			type="button"
			className={`button icon-button has-no-border ${className?.join(' ') ?? ''}`}
		>
			<span className="icon-text">
				<span>
					<FontAwesomeIcon icon={select(name)} />
				</span>
				<span>{name}</span>
			</span>
		</button>
	);
}
