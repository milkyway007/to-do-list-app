import { useState } from 'react';

import { AddDayTaskForm } from '../../controls/AddDayTaskForm/AddDayTaskForm.tsx';
import { ToggleAddTaskButton } from '../../controls/ToggleAddTaskButton/ToggleAddTaskButton.tsx';

import { type DayWithTaskViewModel } from '../../../model/view-model/day-with-task.view-model.ts';
import { type TaskViewModel } from '../../../model/view-model/task.view-model.ts';

import { DayHeader } from '../DayHeader/DayHeader.tsx';

import './DayTaskListContainer.css';

export interface DayTaskListProps {
	day: DayWithTaskViewModel;
}

/**
 * Renders the list of tasks for a specific day.
 * @param props Component properties.
 * @returns The rendered task list component.
 */
export function DayTaskList(props: DayTaskListProps) {
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
