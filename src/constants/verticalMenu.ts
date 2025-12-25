import { type VerticalMenuButtonProps } from '../model/VerticalMenuButton';

import { CONTEXT_CONFIG, type ContextName } from './context';

export const MENU_ORDER = [
	'AddTask',
	'Search',
	'Today',
	'Upcoming',
	'Completed',
	'Tags',
] as const satisfies readonly ContextName[];

export const verticalMenuButtons: VerticalMenuButtonProps[] = MENU_ORDER.map(
	(contextName, index) => ({
		id: contextName,
		name: CONTEXT_CONFIG[contextName].label,
		contextName,
		order: index + 1,
		className: ['hover-bg-grey-lighter'],
	}),
);
