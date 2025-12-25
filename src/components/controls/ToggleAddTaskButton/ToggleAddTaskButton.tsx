import { IconButton } from '../IconButton/IconButton';

import './ToggleAddTaskButton.css';

interface ToggleAddTaskButtonProps {
	toggleIsAdding: () => void;
}

/**
 * ToggleAddTaskButton
 * Button that toggles the Add Day Task form.
 */
export function ToggleAddTaskButton({
	toggleIsAdding,
}: ToggleAddTaskButtonProps) {
	return (
		<button
			className="clickable"
			type="button"
			onClick={toggleIsAdding}
		>
			<IconButton
				id="c036d75a-8df0-42e6-9ca2-3fdf862e0c2b"
				contextName="AddTask"
				className={['hover-text-danger', 'pl-0']}
			/>
		</button>
	);
}
