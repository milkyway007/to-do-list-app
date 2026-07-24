import { type VerticalMenuButtonProps } from '../model/ui/verticalMenuButton.ts';

import { type ContextName } from './context.js';
import { CONTEXT_CONFIG } from './contextConfig.js';

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
		id: '',
		name: CONTEXT_CONFIG[contextName].label,
		contextName,
		order: index + 1,
		className: ['hover-bg-grey-lighter'],
		isActive: false,
	}),
);
