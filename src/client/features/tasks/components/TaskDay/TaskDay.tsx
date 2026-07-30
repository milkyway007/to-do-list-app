import { useState } from 'react';

import { type TaskViewModel } from '../../model/task.view-model.ts';
import { type TaskDayViewModel } from '../../model/task-day.view-model.ts';

import { AddDayTaskForm } from '../AddDayTaskForm/AddDayTaskForm.tsx';
import { DayHeader } from '../DayHeader/DayHeader.tsx';
import { ToggleAddTaskButton } from '../ToggleAddTaskButton/ToggleAddTaskButton.tsx';

import './TaskDay.css';

export interface DayTaskListProps {
	day: TaskDayViewModel;
}

/**
 * Renders the list of tasks for a specific day.
 * @param props Component properties.
 * @returns The rendered task list component.
 */
export function TaskDay(props: DayTaskListProps) {
	const { day } = props;
	const [isAdding, setIsAdding] = useState<boolean>(false);
	const [tasks, setTasks] = useState<TaskViewModel[]>(day.tasks);

	/**
	 * Toggles the visibility of the add task form.
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
				<AddDayTaskForm toggleIsAdding={toggleIsAdding} />
			) : (
				<ToggleAddTaskButton toggleIsAdding={toggleIsAdding} />
			)}
		</div>
	);
}
