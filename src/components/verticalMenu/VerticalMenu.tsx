import { type ParentComponentProps } from '../../model/interfaces';

import './VerticalMenu.css';
import '../general/IconButton.css';

/**
 * @returns Returns a VerticalMenu component;
 * @param root0 ParentComponentProps;
 * @param root0.children The content inside the opening and closing tags of a parent component.
 */
function VerticalMenu({ children }: ParentComponentProps) {
	return (
		<aside className="menu">
			<section className="vertical-menu-section">{children}</section>
		</aside>
	);
}

export default VerticalMenu;
