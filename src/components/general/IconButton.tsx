import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import getIcon from '../../services/iconSelector';

import { type IconButtonProps } from '../../model/interfaces';

import './IconButton.css';

/**
 * @param root0 - An object presenting icon button properties.
 * @param root0.name - icon button name.
 * @param root0.className - icon button classes.
 * @returns Returns an IconButton component.
 */
function IconButton({ name, className }: IconButtonProps) {
	return (
		<button
			className={`button icon-button has-no-border ${className?.join(' ') ?? ''}`}>
			<span className="icon-text">
				<span>
					<FontAwesomeIcon icon={getIcon(name)} />
				</span>
				<span>{name}</span>
			</span>
		</button>
	);
}

export default IconButton;
