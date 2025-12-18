import {
	type ButtonOnClickProps,
	type ButtonProps,
} from '../../model/interfaces';

import { buttons } from '../../constants/constants';

import IconButton from '../general/IconButton';
import VerticalMenuListLabel from './VerticalMenuListLabel';

/**
 * @param root0 vertical menu list props
 * @param root0.buttonOnClick button on click function
 * @returns Returns a VerticalMenuList component.
 */
function VerticalMenuList({ buttonOnClick }: ButtonOnClickProps) {
	return (
		<>
			<VerticalMenuListLabel />
			<ul className={'menu-list'}>
				{buttons.map((item: ButtonProps) => {
					return (
						<li
							key={item.name}
							onClick={() => {
								buttonOnClick(item);
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
