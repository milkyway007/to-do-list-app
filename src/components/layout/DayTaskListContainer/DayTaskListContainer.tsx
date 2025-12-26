import { useState } from 'react';

import { type DayWithTaskViewModel } from '../../../model/viewModel/DayWithTaskViewModel';
import { type TaskViewModel } from '../../../model/viewModel/TaskViewModel';

import { AddDayTaskForm } from '../../controls/AddDayTaskForm/AddDayTaskForm';
import { ToggleAddTaskButton } from '../../controls/ToggleAddTaskButton/ToggleAddTaskButton';
import { DayHeader } from '../DayHeader/DayHeader';

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

	/**
	 * Adds a new task to the tasks list of the current day.
	 */
	function addTask(task: TaskViewModel) {
		setTasks((prev) => [...prev, task]);
	}

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
					addTask={addTask}
				/>
			) : (
				<ToggleAddTaskButton toggleIsAdding={toggleIsAdding} />
			)}
		</div>
	);
}
