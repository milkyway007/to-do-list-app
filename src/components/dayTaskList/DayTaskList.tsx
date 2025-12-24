import { useState } from 'react';

import { type Day } from '../../model/interfaces';

import { AddDayTaskForm } from './AddDayTaskForm';
import { DayHeader } from './DayHeader';
import { ToggleAddTaskButton } from './ToggleAddTaskButton';

import './DayTaskList.css';

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
