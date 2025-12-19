import {
	type ButtonProps,
	type DayTaskFormProps,
} from '../../model/interfaces';

import { buttons, ContextName } from '../../constants/constants';

import IconButton from '../general/IconButton';

/**
 * @param root0 ButtonOnClickProps
 * @param root0.buttonOnClick buttonOnClick function
 * @param root0.isFormHidden Determines if the DayTaskForm component is hidden from the screen:
 * if the DayTaskForm component is hidden, then AddTaskButton is visible and vice versa.
 * @returns AddTaskButton component
 */
function AddTaskButton({ isFormHidden, buttonOnClick }: DayTaskFormProps) {
	console.log(3);
	console.log(isFormHidden);

	const addTaskButton: ButtonProps | undefined = buttons.find(
		(x) => x.name === ContextName.AddTask,
	);

	if (addTaskButton) {
		addTaskButton.className = ['hover-text-danger', 'pl-0'];
	}

	return (
		<>
			{addTaskButton && (
				<div
					className={`clickable ${isFormHidden ? '' : 'is-hidden'}`}
					onClick={() => {
						buttonOnClick(!isFormHidden);
					}}>
					<IconButton {...addTaskButton} />
				</div>
			)}
		</>
	);
}

export default AddTaskButton;
