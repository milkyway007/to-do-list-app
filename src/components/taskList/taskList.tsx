import {
	type ButtonProps,
	type Day,
	type TaskListProps,
} from '../../model/interfaces';

import { buttons, ContextName } from '../../constants/constants';

import DayTaskList from './DayTaskList';

import './TaskList.css';

/**
 * @param root0 today task list props
 * @param root0.buttonOnClick button on click function
 * @param root0.context selected app context
 * @returns Returns a TodayTaskList component.
 */
function TaskListContainer({ context }: TaskListProps) {
	const addTaskButton: ButtonProps | undefined = buttons.find(
		(x) => x.name === ContextName.AddTask,
	);

	if (addTaskButton) {
		addTaskButton.className = ['hover-text-danger'];
	}

	return (
		<>
			{context && (
				<div className="content block task-list-container">
					<div className="task-list-header">
						<h2 className="header mb-5">{context.name}</h2>
					</div>
					<div className="task-list-body">
						{context.taskList?.days.length && (
							<ul>
								{context.taskList.days.map((day: Day) => {
									return (
										<li key={day.id}>
											<DayTaskList day={day} />
										</li>
									);
								})}
							</ul>
						)}
					</div>
				</div>
			)}
		</>
	);
}

export default TaskListContainer;
