import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import select from '../../services/iconSelector';

import { type ButtonProps } from '../../model/interfaces';

import './IconButton.css';

/**
 * @param root0 - An object presenting icon button properties.
 * @param root0.buttonName - icon button name.
 * @param root0.buttonClassName - icon button classes.
 * @returns Returns an IconButton component.
 */
function IconButton({ ...props }: ButtonProps) {
	return (
		<button
			className={`button icon-button has-no-border ${props.className?.join(' ') ?? ''}`}>
			<span className="icon-text">
				<span>
					<FontAwesomeIcon icon={select(props.name)} />
				</span>
				<span>{props.name}</span>
			</span>
		</button>
	);
}

export default IconButton;
