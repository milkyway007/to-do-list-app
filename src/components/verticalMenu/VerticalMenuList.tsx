import { type MenuListItem } from '../../model/interfaces';

import { mainMenuListItems } from '../../constants/constants';

import VerticalMenuListItem from './VerticalMenuListButton';
import VerticalMenuListLabel from './VerticalMenuListLabel';

/**
 * @returns Returns a VerticalMenuList component.
 */
function VerticalMenuList() {
	return (
		<>
			<VerticalMenuListLabel />
			<ul className={'menu-list'}>
				{mainMenuListItems.map((item: MenuListItem) => {
					return (
						<li key={item.itemName}>
							<VerticalMenuListItem {...item} />
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default VerticalMenuList;
