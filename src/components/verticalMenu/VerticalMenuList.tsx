import { type IconButtonProps } from '../../model/interfaces';
import { type ButtonNameType } from '../../model/types';

import { mainMenuListItems } from '../../constants/constants';

import IconButton from '../general/IconButton';
import VerticalMenuListLabel from './VerticalMenuListLabel';

interface VerticalMenuListProps {
	buttonOnClick: (buttonName: ButtonNameType) => void;
}

/**
 * @param root0 vertical menu list props
 * @param root0.buttonOnClick button on click function
 * @returns Returns a VerticalMenuList component.
 */
function VerticalMenuList({ buttonOnClick }: VerticalMenuListProps) {
	return (
		<>
			<VerticalMenuListLabel />
			<ul className={'menu-list'}>
				{mainMenuListItems.map((item: IconButtonProps) => {
					return (
						<li
							key={item.name}
							onClick={() => {
								buttonOnClick(item.name);
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
