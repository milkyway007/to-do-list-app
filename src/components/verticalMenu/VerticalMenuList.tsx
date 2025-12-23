import {
	type VerticalMenuButtonClickedProps,
	type VerticalMenuButtonProps,
} from '../../model/interfaces';

import { verticalMenuButtons } from '../../constants/constants';

import IconButton from '../general/IconButton';

/**
 * @returns Returns a VerticalMenuList component;
 * @param root0 VerticalMenuButtonClickedProps;
 * @param root0.buttonClicked Vertical menu button component clicked function.
 */
function VerticalMenuList({ buttonClicked }: VerticalMenuButtonClickedProps) {
	return (
		<>
			<ul className="menu-list">
				{verticalMenuButtons.map((item: VerticalMenuButtonProps) => {
					return (
						<li
							key={item.name}
							onClick={() => {
								buttonClicked(item);
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
