import { useState } from 'react';

import { type DayTaskListProps } from '../../model/interfaces';

import AddDayTaskForm from './AddDayTaskForm';
import DateContainer from './DateContainer';
import ShowAddDayTaskFormButton from './ShowAddDayTaskFormButton';

import './DayTaskList.css';

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
		setIsAdding((adding) => !adding);
	}

	let content = undefined;

	if (isAdding) {
		content = <AddDayTaskForm toggleIsAdding={toggleIsAdding} />;
	} else {
		content = <ShowAddDayTaskFormButton toggleIsAdding={toggleIsAdding} />;
	}

	return (
		<>
			<DateContainer date={day.date} />
			{content}
		</>
	);
}

export default DayTaskList;
