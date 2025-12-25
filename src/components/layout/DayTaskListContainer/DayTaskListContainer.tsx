import { useState } from 'react';

import { type Day } from '../../../model/Day';

import { AddDayTaskForm } from '../../controls/AddDayTaskForm/AddDayTaskForm';
import { ToggleAddTaskButton } from '../../controls/ToggleAddTaskButton/ToggleAddTaskButton';
import { DayHeader } from '../DayHeader/DayHeader';

import './DayTaskListContainer.css';

export interface DayTaskListProps {
	day: Day;
}

/**
 * DayTaskList
 */
export function DayTaskList({ day }: DayTaskListProps) {
	const [isAdding, setIsAdding] = useState<boolean>(false);

	/**
	 * Toggles the IsAdding state.
	 */
	const toggleIsAdding = () => {
		setIsAdding((prev) => !prev);
	};

	return (
		<div className="day-task-list">
			<DayHeader date={day.date} />

			{isAdding ? (
				<AddDayTaskForm toggleIsAdding={toggleIsAdding} />
			) : (
				<ToggleAddTaskButton toggleIsAdding={toggleIsAdding} />
			)}
		</div>
	);
}
