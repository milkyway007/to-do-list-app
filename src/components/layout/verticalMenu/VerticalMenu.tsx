import { type PropsWithChildren } from 'react';

import './VerticalMenu.css';

/**
 * VerticalMenu
 * A layout component that renders a vertical navigation/menu container.
 */
export function VerticalMenu({ children }: PropsWithChildren) {
	return (
		<aside className="menu">
			<section className="vertical-menu-section">{children}</section>
		</aside>
	);
}
