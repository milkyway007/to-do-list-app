import { type IconButtonProps } from '../../model/interfaces';
import { type ButtonNameType } from '../../model/types';

import { ButtonName } from '../../constants/constants';

import IconButton from '../general/IconButton';

import './TaskList.css';

interface TodayTaskListProps {
	buttonOnClick: (buttonName: ButtonNameType) => void;
}

/**
 * @param root0 today task list props
 * @param root0.buttonOnClick button on click function
 * @returns Returns a TodayTaskList component.
 */
function TaskList({ buttonOnClick }: TodayTaskListProps) {
	const item: IconButtonProps = {
		name: ButtonName.AddTask,
		className: ['hover-text-danger', 'px-1'],
	};

	return (
		<div className="content today-task-list">
			<div className="today-task-list-header">
				<h2 className="header mb-5">Today</h2>
			</div>
			<div className="today-task-list-body">
				<div className="header day-data-container has-text-weight-bold pb-1 mb-1">
					<div>17 Dec</div>
					<div>Today</div>
					<div>Wednesday</div>
				</div>
				<div
					className="clickable"
					onClick={() => {
						buttonOnClick(item.name);
					}}>
					<IconButton {...item} />
				</div>
			</div>
		</div>
	);
}

export default TaskList;
