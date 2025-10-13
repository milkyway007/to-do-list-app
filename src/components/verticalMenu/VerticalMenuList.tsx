import { type MenuListItem } from '../../model/interfaces';

import { mainMenuListItems } from '../../constants/constants';

import VerticalMenuListItem from './VerticalMenuListButton';
import VerticalMenuListLabel from './VerticalMenuListLabel';

/**
 * @returns Returns a VerticalMenuList component.
 */
function VerticalMenuList() {
	/**
	 * OnClick event for vertical menu list item.
	 * @param itemName vertical menu list item header.
	 */
	function handleClick(itemName: string): void {
		console.log(itemName);
	}

	return (
		<>
			<VerticalMenuListLabel />
			<ul className={'menu-list'}>
				{mainMenuListItems.map((item: MenuListItem) => {
					return (
						<li
							key={item.itemName}
							onClick={() => {
								handleClick(item.itemName);
							}}>
							<VerticalMenuListItem {...item} />
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default VerticalMenuList;
