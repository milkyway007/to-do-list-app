import { faCalendarDay,
	faCalendarDays,
	faCircleCheck,
	faMagnifyingGlass,
	faPlus,
	faTags,
	type IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { MenuListItem } from '../../types/types';

/**
 * @param root0 - An object presenting menu list item properties.
 * @param root0.itemName - Menu list item header.
 * @returns Returns a VerticalMenuListItem component.
 */
function VerticalMenuListItem({ itemName, }: MenuListItem,)
{
	/**
	 * @param name - Menu list item header.
	 * @returns Returns a VerticalMenuListItem icon.
	 */
	function getIcon(name: string,): IconDefinition
	{
		switch (name)
		{
			case 'Add task':
				return faPlus;
			case 'Search':
				return faMagnifyingGlass;
			case 'Today':
				return faCalendarDay;
			case 'Upcoming':
				return faCalendarDays;
			case 'Completed':
				return faCircleCheck;
			case 'Tags':
				return faTags;
			default:
				throw new Error(`No icon found for "${name}"`,);
		}
	}

	return (
		<>
			<span className={'icon-text'}>
				<FontAwesomeIcon icon={getIcon(itemName,)} />
				<span>{itemName}</span>
			</span>
		</>
	);
}

export default VerticalMenuListItem;
