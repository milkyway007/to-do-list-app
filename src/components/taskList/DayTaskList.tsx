import { useState } from 'react';

import { type DayTaskListProps } from '../../model/interfaces';

import AddTaskButton from './AddTaskButton';
import DateContainer from './DateContainer';
import DayTaskForm from './DayTaskForm';

import './TaskList.css';

/**
 * @returns DayTaskList component;
 * @param root0 DayTaskListProps;
 * @param root0.day day object.
 */
function DayTaskList({ day }: DayTaskListProps) {
	const [isAdding, setIsAdding] = useState<boolean>(false);

	/**
	 * Toggles the IsAdding state.
	 */
	function toggleIsAdding(): void {
		setIsAdding(!isAdding);
	}

	let content = undefined;

	if (isAdding) {
		content = <DayTaskForm toggleIsAdding={toggleIsAdding} />;
	} else {
		content = <AddTaskButton toggleIsAdding={toggleIsAdding} />;
	}

	return (
		<>
			<DateContainer date={day.date} />
			{content}
		</>
	);
}

export default DayTaskList;
