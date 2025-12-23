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
	const [isAdding, setIsAdding] = useState<boolean>(false);

	/**
	 * Toggles the IsAdding state.
	 */
	function toggleIsAdding(): void {
		setIsAdding(!isAdding);
	}

	return (
		<>
			<DateContainer date={day.date} />
			<DayTaskForm
				isAdding={isAdding}
				toggleIsAdding={toggleIsAdding}
			/>
			<AddTaskButton
				isAdding={isAdding}
				toggleIsAdding={toggleIsAdding}
			/>
		</>
	);
}

export default DayTaskList;
