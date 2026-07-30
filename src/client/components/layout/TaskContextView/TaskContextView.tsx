import { type ContextName } from '../../../constants/context.ts';
import { CONTEXT_CONFIG } from '../../../constants/context-config.ts';

import { type TaskDayViewModel } from '../../../model/view-model/task-day.view-model.ts';

import { DayTaskList } from '../DayTaskListContainer/DayTaskListContainer.tsx';

interface TaskContextViewProps {
	name: ContextName;
	taskDays: TaskDayViewModel[];
}

/**
 * Displays tasks grouped by day for the selected context.
 * @param props Component properties.
 * @returns The rendered task context view.
 */
export function TaskContextView(props: TaskContextViewProps) {
	const { name, taskDays } = props;

	return (
		<div className="content block task-list-container">
			<div className="task-list-header">
				<h2 className="header mb-5">{CONTEXT_CONFIG[name].label}</h2>
			</div>

			<div className="task-list-body">
				{taskDays.length > 0 && (
					<ul>
						{taskDays.map((taskDay) => (
							<li key={taskDay.id}>
								<DayTaskList day={taskDay} />
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
