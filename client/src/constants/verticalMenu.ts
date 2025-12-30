import { type VerticalMenuButtonProps } from '../model/ui/VerticalMenuButton.ts';

import { type ContextName } from './context.ts';
import { CONTEXT_CONFIG } from './contextConfig.ts';

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
