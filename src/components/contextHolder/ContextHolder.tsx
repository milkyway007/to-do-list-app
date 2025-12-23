import { type ParentComponentProps } from '../../model/interfaces';

/**
 * @returns Returns a ContextHolder component;
 * @param root0 ParentComponentProps;
 * @param root0.children The content inside the opening and closing tags of a parent component.
 */
function ContextHolder({ children }: ParentComponentProps) {
	return (
		<div className="columns">
			<div className="column is-half is-offset-one-quarter">{children}</div>
		</div>
	);
}

export default ContextHolder;
