import { useState } from 'react';

import { type Task } from '../../../model/Task';

import './AddDayTaskForm.css';

interface AddDayTaskFormProps {
	toggleIsAdding: () => void;
}

const initialTask: Task = {
	id: '',
	title: '',
	description: '',
};

/**
 * AddDayTaskForm
 * Allows creating a new day task with title and description.
 */
export function AddDayTaskForm({ toggleIsAdding }: AddDayTaskFormProps) {
	const [newTask, setNewTask] = useState<Task>(initialTask);

	/**
	 * Updates the task title in the state when the textarea changes.
	 */
	function onTitleChanged(event: React.ChangeEvent<HTMLTextAreaElement>) {
		setNewTask((prev) => ({
			...prev,
			title: event.target.value,
		}));
	}

	/**
	 * Updates the task description in the state when the textarea changes.
	 */
	function onDescriptionChanged(event: React.ChangeEvent<HTMLTextAreaElement>) {
		setNewTask((prev) => ({
			...prev,
			description: event.target.value,
		}));
	}

	return (
		<form className="box add-day-task-form m-0 p-0">
			<div className="add-day-task-form-block m-4">
				<textarea
					className="textarea auto-textarea p-0"
					placeholder="Discuss thesis tomorrow morning"
					value={newTask.title}
					rows={1}
					onChange={onTitleChanged}
				></textarea>
				<textarea
					className="textarea auto-textarea p-0"
					placeholder="Description"
					value={newTask.description}
					rows={1}
					onChange={onDescriptionChanged}
				></textarea>
			</div>
			<div className="buttons is-grouped add-day-task-form-footer p-4">
				<button
					type="button"
					className="button is-light right"
					onClick={toggleIsAdding}
				>
					Cancel
				</button>
				<button
					type="button"
					className="button is-danger right"
				>
					Add task
				</button>
			</div>
		</form>
	);
}
