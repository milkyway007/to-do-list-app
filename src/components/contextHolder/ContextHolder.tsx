import { type ParentComponentProps } from '../../model/interfaces';

/**
 * ContextHolder component.
 * Provides a centered column layout for its children.
 * @param root0 - ParentComponentProps.
 * @param root0.children - Content rendered inside the container.
 * @returns - A ContextHolder component.
 */
function ContextHolder({ children }: ParentComponentProps) {
	return (
		<div className="columns">
			<div className="column is-half is-offset-one-quarter">{children}</div>
		</div>
	);
}

export default ContextHolder;
