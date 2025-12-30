import {
	faCalendarDay,
	faCalendarDays,
	faCircleCheck,
	faMagnifyingGlass,
	faPlus,
	faTags,
	type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import { type ContextName } from '../../constants/context.ts';

/**
 * Returns the FontAwesome icon corresponding to a given context name.
 */
export default function select(contextName: ContextName): IconDefinition {
	switch (contextName) {
		case 'AddTask':
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
	}
}
