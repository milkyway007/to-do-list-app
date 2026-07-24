import { useState } from 'react';

import { type DayWithTaskViewModel } from '../../../model/viewModel/dayWithTaskViewModel.ts';
import { type TaskViewModel } from '../../../model/viewModel/taskViewModel.ts';

import { AddDayTaskForm } from '../../controls/AddDayTaskForm/AddDayTaskForm.js';
import { ToggleAddTaskButton } from '../../controls/ToggleAddTaskButton/ToggleAddTaskButton.js';
import { DayHeader } from '../DayHeader/DayHeader.js';

import './DayTaskListContainer.css';

export interface DayTaskListProps {
	day: DayWithTaskViewModel;
}

/**
 * DayTaskList
 */
export function DayTaskList({ day }: DayTaskListProps) {
	const [isAdding, setIsAdding] = useState<boolean>(false);
	const [tasks, setTasks] = useState<TaskViewModel[]>(day.tasks);

	/**
	 * Toggles the IsAdding state.
	 */
	const toggleIsAdding = () => {
		setIsAdding((prev) => !prev);
	};

	return (
		<div className="day-task-list">
			<DayHeader date={day.date} />
			<ol className="radios mx-0 mb-0">
				{tasks.map((item: TaskViewModel) => {
					return (
						<li key={item.id}>
							<div className="day-task pb-4">
								<label className="radio day-task-radio">
									<input
										type="radio"
										name="day-task-radios"
									/>
								</label>
								<div className="day-task-radio-content">
									<div className="day-task-title">{item.title}</div>
									<div className="day-task-description">{item.description}</div>
								</div>
							</div>
						</li>
					);
				})}
			</ol>

			{isAdding ? (
				<AddDayTaskForm
					toggleIsAdding={toggleIsAdding}
				/>
			) : (
				<ToggleAddTaskButton toggleIsAdding={toggleIsAdding} />
			)}
		</div>
	);
}
