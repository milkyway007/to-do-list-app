import { type VerticalMenuButtonClickedProps } from '../../model/interfaces';

import VerticalMenuList from './VerticalMenuList';

import './VerticalMenu.css';
import '../general/IconButton.css';

/**
 * @returns Returns a VerticalMenu component;
 * @param root0 VerticalMenuButtonClickedProps;
 * @param root0.buttonClicked Vertical menu button component clicked function.
 */
function VerticalMenu({ buttonClicked }: VerticalMenuButtonClickedProps) {
	return (
		<aside className="menu">
			<section className="vertical-menu-section">
				<VerticalMenuList buttonClicked={buttonClicked} />
			</section>
		</aside>
	);
}

export default VerticalMenu;
