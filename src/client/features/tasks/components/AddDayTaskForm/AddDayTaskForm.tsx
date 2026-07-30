import { useState } from 'react';

import { type TaskViewModel } from '../../model/task.view-model.ts';

import './AddDayTaskForm.css';

interface AddDayTaskFormProps {
	toggleIsAdding: () => void;
}

type EditableTaskField = 'title' | 'description';

/**
 * Renders a form for creating a new task.
 * @param props Component properties.
 * @returns The rendered day task form component.
 */
export function AddDayTaskForm(props: AddDayTaskFormProps) {
	const { toggleIsAdding } = props;
	const [enteredTask, setEnteredTask] = useState<TaskViewModel>({
		id: '',
		title: '',
		description: '',
	});

	/**
	 * Handles submission of the add task form.
	 * @param event The form submission event.
	 */
	function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();

		console.log('Entered task: ', enteredTask);

		toggleIsAdding();
	}

	/**
	 * Updates the specified task field with the user's input.
	 * @param identifier The task field to update.
	 * @param event The input change event.
	 */
	function handleInputChange(
		identifier: EditableTaskField,
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) {
		setEnteredTask((prevTask) => ({
			...prevTask,
			[identifier]: event.target.value,
		}));
	}

	return (
		<form
			className="box add-day-task-form m-0 mt-1 p-0"
			onSubmit={handleSubmit}
		>
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
				<button className="button is-danger right">Add task</button>
			</div>
		</form>
	);
}
