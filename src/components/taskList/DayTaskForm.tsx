import { type DayTaskFormProps } from '../../model/interfaces';

/**
 * @returns DayTaskForm component
 * @param root0 DayTaskFormProps
 * @param root0.isFormHidden Determines if the DayTaskForm component is hidden from the screen:
 * if the DayTaskForm component is hidden, then AddTaskButton is visible and vice versa.
 * @param root0.buttonOnClick cancel button on click function
 */
function DayTaskForm({ isFormHidden, buttonOnClick }: DayTaskFormProps) {
	console.log(2);
	console.log(isFormHidden);

	return (
		<form
			className={`box day-task-form m-0 p-0 ${isFormHidden ? 'is-hidden' : ''}`}>
			<div className="day-task-form-block m-4">
				<textarea
					className="textarea auto-textarea p-0"
					placeholder="Discuss thesis tomorrow morning"
					rows={1}></textarea>
				<textarea
					className="textarea auto-textarea p-0"
					placeholder="Description"
					rows={1}></textarea>
			</div>
			<div className="buttons is-grouped day-task-form-footer p-4">
				<button
					type="button"
					className="button is-light right"
					onClick={() => {
						buttonOnClick(!isFormHidden);
					}}>
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

export default DayTaskForm;
