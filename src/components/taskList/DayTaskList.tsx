import { useState } from 'react';

import { type DayTaskListProps } from '../../model/interfaces';

import AddTaskButton from './AddTaskButton';
import DateContainer from './DateContainer';
import DayTaskForm from './DayTaskForm';

import './TaskList.css';

/**
 * @param root0 DayTaskListProps
 * @param root0.day day object
 * @returns DayTaskList component
 */
function DayTaskList({ day }: DayTaskListProps) {
	const [isFormHidden, setIsHidden] = useState<boolean>(true);
	console.log(1);
	console.log(isFormHidden);

	/**
	 * OnClick event for a button.
	 * @param isFormHidden determines if the DayTaskForm and AddTaskButton components are hidden from the screen
	 */
	function buttonOnClick(isFormHidden: boolean): void {
		console.log(isFormHidden);
		setIsHidden(isFormHidden);
	}

	return (
		<>
			<DateContainer date={day.date} />
			<DayTaskForm
				isFormHidden={isFormHidden}
				buttonOnClick={buttonOnClick}
			/>
			<AddTaskButton
				isFormHidden={isFormHidden}
				buttonOnClick={buttonOnClick}
			/>
		</>
	);
}

export default DayTaskList;
