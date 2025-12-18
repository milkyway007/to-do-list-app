import { type ButtonOnClickProps } from '../../model/interfaces';

import VerticalMenuList from './VerticalMenuList';

import './VerticalMenu.css';
import '../general/IconButton.css';

/**
 * @param root0 vertical menu props
 * @param root0.buttonOnClick button on click function
 * @returns Returns a VerticalMenu component.
 */
function VerticalMenu({ buttonOnClick }: ButtonOnClickProps) {
	return (
		<aside className={'menu'}>
			<section className="vertical-menu-section">
				<VerticalMenuList buttonOnClick={buttonOnClick} />
			</section>
		</aside>
	);
}

export default VerticalMenu;
