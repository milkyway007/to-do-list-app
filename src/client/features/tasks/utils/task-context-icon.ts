import {
	faCalendarDay,
	faCalendarDays,
	faCircleCheck,
	faMagnifyingGlass,
	faPlus,
	faTags,
	type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import { assertNever } from '../../../../shared/utils/assert-never.ts';

import { type TaskContextName } from '../config/task-context.config.ts';

/**
 * Selects a FontAwesome icon for the specified context.
 * @param contextName The context used to determine the corresponding icon.
 * @returns The FontAwesome icon definition associated with the context.
 */
export default function selectIcon(
	contextName: TaskContextName,
): IconDefinition {
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
