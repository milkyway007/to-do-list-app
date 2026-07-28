import { type PropsWithChildren } from 'react';

import './VerticalMenu.css';

/**
 * VerticalMenu
 * A layout component that renders a vertical navigation/menu container.
 * @param root0
 * @param root0.children
 */
export function VerticalMenu({ children }: PropsWithChildren) {
	return (
		<aside className="menu">
			<section className="vertical-menu-section">{children}</section>
		</aside>
	);
}
