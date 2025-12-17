import { type ButtonNameType } from '../../model/types';

import VerticalMenuList from './VerticalMenuList';

import './VerticalMenu.css';
import '../general/IconButton.css';

interface VerticalMenuProps {
	buttonOnClick: (buttonName: ButtonNameType) => void;
}

/**
 * @param root0 vertical menu props
 * @param root0.buttonOnClick button on click function
 * @returns Returns a VerticalMenu component.
 */
function VerticalMenu({ buttonOnClick }: VerticalMenuProps) {
	return (
		<aside className={'menu'}>
			<section className="vertical-menu-section">
				<VerticalMenuList buttonOnClick={buttonOnClick} />
			</section>
		</aside>
	);
}

export default VerticalMenu;
