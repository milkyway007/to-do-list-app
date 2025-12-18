import { type DayTaskListProps } from '../../model/interfaces';

import AddTaskButton from './AddTaskButton';
import DateContainer from './DateContainer';

/**
 * @param root0 DayTaskListProps
 * @param root0.buttonOnClick buttonOnClick function
 * @param root0.date date
 * @returns DayTaskList component
 */
function DayTaskList({ buttonOnClick, date }: DayTaskListProps) {
	return (
		<>
			<DateContainer date={date} />
			<AddTaskButton buttonOnClick={buttonOnClick} />
		</>
	);
}

export default DayTaskList;
