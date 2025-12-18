import {
	type ButtonOnClickProps,
	type ButtonProps,
} from '../../model/interfaces';

import { buttons, ContextName } from '../../constants/constants';

import IconButton from '../general/IconButton';

/**
 * @param root0 ButtonOnClickProps
 * @param root0.buttonOnClick buttonOnClick function
 * @returns AddTaskButton component
 */
function AddTaskButton({ buttonOnClick }: ButtonOnClickProps) {
	const addTaskButton: ButtonProps | undefined = buttons.find(
		(x) => x.name === ContextName.AddTask,
	);

	if (addTaskButton) {
		addTaskButton.className = ['hover-text-danger'];
	}

	return (
		<>
			{addTaskButton && (
				<div
					className="clickable"
					onClick={() => {
						buttonOnClick(addTaskButton);
					}}>
					<IconButton {...addTaskButton} />
				</div>
			)}
		</>
	);
}

export default AddTaskButton;
