import {
	type AddDayTaskProps,
	type IconButtonProps,
} from '../../model/interfaces';

import { ButtonName } from '../../constants/constants';

import IconButton from '../general/IconButton';

/**
 * @returns AddDayTaskProps component;
 * @param root0 DayTaskFormProps;
 * @param root0.toggleIsAdding Toggles IsAdding property;
 * @param root0.isAdding Determines if the DayTaskList component is in IsAdding state.
 */
function AddTaskButton({ isAdding, toggleIsAdding }: AddDayTaskProps) {
	const addTaskButton: IconButtonProps = {
		id: 'c036d75a-8df0-42e6-9ca2-3fdf862e0c2b',
		name: ButtonName.AddTask,
		className: ['hover-text-danger', 'pl-0'],
	};

	return (
		<div
			className={`clickable ${isAdding ? 'is-hidden' : ''}`}
			onClick={toggleIsAdding}>
			<IconButton {...addTaskButton} />
		</div>
	);
}

export default AddTaskButton;
