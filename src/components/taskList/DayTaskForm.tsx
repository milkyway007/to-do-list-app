import { type AddDayTaskProps } from '../../model/interfaces';

/**
 * @returns DayTaskForm component;
 * @param root0 AddDayTaskProps;
 * @param root0.toggleIsAdding Toggles IsAdding property;
 * @param root0.isAdding Determines if the DayTaskList component is in IsAdding state.
 */
function DayTaskForm({ isAdding, toggleIsAdding }: AddDayTaskProps) {
	return (
		<form
			className={`box day-task-form m-0 p-0 ${!isAdding ? 'is-hidden' : ''}`}>
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

export default DayTaskForm;
