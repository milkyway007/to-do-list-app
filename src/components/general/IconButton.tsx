import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import getIcon from '../../services/iconSelector';

import { type IconButtonProps } from '../../model/interfaces';

import './IconButton.css';

/**
 * @param root0 - An object presenting icon button properties.
 * @param root0.name - icon button name.
 * @returns Returns an IconButton component.
 */
function IconButton({ name }: IconButtonProps) {
	return (
		<button className="button is-transparent has-no-border icon-button">
			<span className={'icon-text'}>
				<span>
					<FontAwesomeIcon icon={getIcon(name)} />
				</span>
				<span>{name}</span>
			</span>
		</button>
	);
}

export default IconButton;
