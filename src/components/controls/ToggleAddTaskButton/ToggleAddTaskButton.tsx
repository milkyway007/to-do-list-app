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
		<div
			className="clickable"
			role="button"
			onClick={toggleIsAdding}
		>
			<IconButton
				contextName="AddTask"
				className={['hover-text-danger', 'pl-0']}
			/>
		</div>
	);
}
