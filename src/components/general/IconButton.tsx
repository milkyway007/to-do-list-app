import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import select from '../../services/iconSelector';

import { type IconButtonProps } from '../../model/interfaces';

import './IconButton.css';

/**
 * @returns Returns an IconButton component;
 * @param root0 IconButtonProps;
 * @param root0.name Icon button name;
 * @param root0.className Icon button classes.
 */
function IconButton({ name, className }: IconButtonProps) {
	return (
		<button
			className={`button icon-button has-no-border ${className?.join(' ') ?? ''}`}>
			<span className="icon-text">
				<span>
					<FontAwesomeIcon icon={select(name)} />
				</span>
				<span>{name}</span>
			</span>
		</button>
	);
}

export default IconButton;
