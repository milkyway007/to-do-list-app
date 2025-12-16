import { type IconButtonProps } from '../../model/interfaces';

import { mainMenuListItems } from '../../constants/constants';

import IconButton from '../general/IconButton';
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
				{mainMenuListItems.map((item: IconButtonProps) => {
					return (
						<li
							key={item.name}
							onClick={() => {
								handleClick(item.name);
							}}>
							<IconButton {...item} />
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default VerticalMenuList;
