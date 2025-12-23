import { useState } from 'react';

import { type AddDayTaskProps, type Task } from '../../model/interfaces';

const initialTask: Task = {
	id: '',
	title: '',
	description: '',
};

/**
 * AddDayTaskForm component.
 * Allows creating a new day task with title and description.
 * @param AddDayTaskProps - AddDayTaskProps.
 * @param AddDayTaskProps.toggleIsAdding  - Toggles the "isAdding" state in the parent component.
 * @returns AddDayTaskForm component.
 */
function AddDayTaskForm({ toggleIsAdding }: AddDayTaskProps) {
	const [newTask, setNewTask] = useState<Task>(initialTask);

	/**
	 * Handles changes to the task title.
	 *
	 * @param event - The textarea change event.
	 */
	function onTitleChanged(event: React.ChangeEvent<HTMLTextAreaElement>) {
		setNewTask((prev) => ({
			...prev,
			title: event.target.value,
		}));
	}

	/**
	 * Handles changes to the task description.
	 *
	 * @param event - The textarea change event.
	 */
	function onDescriptionChanged(event: React.ChangeEvent<HTMLTextAreaElement>) {
		setNewTask((prev) => ({
			...prev,
			description: event.target.value,
		}));
	}

	return (
		<form className="box day-task-form m-0 p-0">
			<div className="day-task-form-block m-4">
				<textarea
					className="textarea auto-textarea p-0"
					placeholder="Discuss thesis tomorrow morning"
					value={newTask.title}
					rows={1}
					onChange={onTitleChanged}></textarea>
				<textarea
					className="textarea auto-textarea p-0"
					placeholder="Description"
					value={newTask.description}
					rows={1}
					onChange={onDescriptionChanged}></textarea>
			</div>
			<div className="buttons is-grouped day-task-form-footer p-4">
				<button
					type="button"
					className="button is-light right"
					onClick={toggleIsAdding}>
					Cancel
				</button>
				<button
					type="button"
					className="button is-danger right">
					Add task
				</button>
			</div>
		</form>
	);
}

export default AddDayTaskForm;
