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

import { assertNever } from '../../../shared/utils/assert-never.ts';

/**
 * Selects a FontAwesome icon for the specified context.
 * @param contextName The context used to determine the corresponding icon.
 * @returns The FontAwesome icon definition associated with the context.
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
		default:
			return assertNever(contextName);
	}
}
