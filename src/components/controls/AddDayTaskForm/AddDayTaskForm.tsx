import { useState } from 'react';

import { type TaskViewModel } from '../../../model/viewModel/taskViewModel.ts';

import './AddDayTaskForm.css';

interface AddDayTaskFormProps {
	toggleIsAdding: () => void;
}

type EditableTaskField = 'title' | 'description';

/**
 * AddDayTaskForm
 * Allows creating a new day task with title and description.
 */
export function AddDayTaskForm({
	toggleIsAdding
}: AddDayTaskFormProps) {
	const [enteredTask, setEnteredTask] = useState<TaskViewModel>({
		id: '',
		title: '',
		description: '',
	});

	/**
	 * Handles task form submission and closes the add task dialog.
	 */
	function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();

		console.log('Entered task: ', enteredTask);

		toggleIsAdding();
	}

	/**
	 * Updates the corresponding task property with the value entered by the user.
	 */
	function handleInputChange(identifier: EditableTaskField, event: React.ChangeEvent<HTMLTextAreaElement>) {
		setEnteredTask((prevTask) => ({
			...prevTask,
			[identifier]: event.target.value,
		}));
	}

	return (
		<form className="box add-day-task-form m-0 mt-1 p-0" onSubmit={handleSubmit}>
			<div className="add-day-task-form-block m-4">
				<textarea
					className="textarea auto-textarea p-0"
					placeholder="Discuss thesis tomorrow morning"
					value={enteredTask.title}
					rows={1}
					onChange={(event) => handleInputChange('title', event)}
					name="title"
				></textarea>
				<textarea
					className="textarea auto-textarea p-0"
					placeholder="Description"
					value={enteredTask.description}
					rows={1}
					onChange={(event) => handleInputChange('description', event)}
					name="description"
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
					className="button is-danger right"
				>
					Add task
				</button>
			</div>
		</form>
	);
}
