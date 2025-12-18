import {
	faCalendarDay,
	faCalendarDays,
	faCircleCheck,
	faMagnifyingGlass,
	faPlus,
	faTags,
	type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

/**
 * @param name - Menu list item header.
 * @returns Returns a VerticalMenuListItem icon.
 */
export default function select(name: string): IconDefinition {
	switch (name) {
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
			throw new Error(`No icon found for "${name}"`);
	}
}
