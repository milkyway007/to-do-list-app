import { IconButton } from '../../../../app/components/IconButton/IconButton.tsx';

import './ToggleAddTaskButton.css';

interface ToggleAddTaskButtonProps {
	toggleIsAdding: () => void;
}

/**
 * Renders a button that toggles the add task form.
 * @param props Component properties.
 * @returns The rendered add task button component.
 */
export function ToggleAddTaskButton(props: ToggleAddTaskButtonProps) {
	const { toggleIsAdding } = props;

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
