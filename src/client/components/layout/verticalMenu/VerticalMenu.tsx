import './VerticalMenu.css';

interface VerticalMenuProps {
	/**
	 * The content to render inside the menu.
	 */
	children?: React.ReactNode;
}

/**
 * Renders a vertical navigation menu container.
 * @param props Component properties;.
 * @returns The rendered vertical menu component.
 */
export function VerticalMenu(props: VerticalMenuProps) {
	const { children } = props;

	return (
		<aside className="menu">
			<section className="vertical-menu-section">{children}</section>
		</aside>
	);
}
