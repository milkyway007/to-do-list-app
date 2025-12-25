import {
	getWeekdayName,
	isToday,
	isYesterday,
} from '../../../services/dateTime/dateTimeUtils';
import { convert } from '../../../services/dateTime/monthToStringConverter';

import './DayHeader.css';

interface DayHeaderProps {
	date: Date;
}

/**
 * DayHeader
 * Displays a header for a given date, showing the day, month,
 * weekday, and optionally 'Today' or 'Yesterday'.
 */
export function DayHeader({ date }: DayHeaderProps) {
	const todayLabel = isToday(date)
		? 'Today'
		: isYesterday(date)
			? 'Yesterday'
			: '';

	return (
		<div className="header day-header has-text-weight-bold pb-1 mb-3">
			<div>
				{date.getDate()} {convert(date.getMonth())}
			</div>

			{todayLabel && <div>{todayLabel}</div>}

			<div>{getWeekdayName(date)}</div>
		</div>
	);
}
