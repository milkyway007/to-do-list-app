import { type IconButtonProps } from '../model/interfaces';

import IconButton from '../components/general/IconButton';

import './TodayTaskList.css';

/**
 * @returns Returns a TodayTaskList component.
 */
function TodayTaskList() {
	const item: IconButtonProps = {
		name: 'Add task',
	};

	return (
		<div className="content today-task-list">
			<div className="today-task-list-header">
				<h2 className="header">Today</h2>
			</div>
			<div className="today-task-list-body">
				<div className="header has-text-weight-bold pb-1">
					16 Dec Today Tuesday
				</div>
				<div>
					<IconButton {...item} />
				</div>
			</div>
		</div>
	);
}

export default TodayTaskList;
