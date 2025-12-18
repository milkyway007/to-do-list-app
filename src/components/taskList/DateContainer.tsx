import {
	getWeekdayName,
	isToday,
	isYesterday,
} from '../../services/dateTimeUtils';
import { convert } from '../../services/monthToStringConverter';

import { type DayDataContainerProps } from '../../model/interfaces';

/**
 * @returns DayDataContainer
 * @param root0 DayDataContainerProps
 * @param root0.date date
 */
function DayDataContainer({ date }: DayDataContainerProps) {
	return (
		<div className="header day-data-container has-text-weight-bold pb-1 mb-1">
			<div>
				{date.getDate()} {convert(date.getMonth())}
			</div>
			<div className={!isToday(date) && !isYesterday(date) ? 'is-hidden' : ''}>
				{isToday(date) ? 'Today' : 'Yesterday'}
			</div>
			<div>{getWeekdayName(date)}</div>
		</div>
	);
}

export default DayDataContainer;
