import type { MenuListItem } from '../../types/types';
import VerticalMenuListItem from './VerticalMenuListItem';
import VerticalMenuListLabel from './VerticalMenuListLabel';

import { mainMenuListItems } from '../../constnants/constants';

/**
 * @returns Returns a VerticalMenuList component.
 */
function VerticalMenuList()
{
	return (
		<>
			<VerticalMenuListLabel />
			<ul className={'menu-list'}>
				{mainMenuListItems.map((item: MenuListItem,) =>
				{
					return (
						<li key={item.itemName}>
							<VerticalMenuListItem {...item} />
						</li>
					);
				},)}
			</ul>
		</>
	);
}

export default VerticalMenuList;
