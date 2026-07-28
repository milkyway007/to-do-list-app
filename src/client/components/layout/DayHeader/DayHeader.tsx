import {
	getWeekdayName,
	isToday,
	isYesterday,
} from '../../../services/date-time/date-time-utils.ts';
import { convert } from '../../../services/date-time/month-to-string.converter.ts';

import './DayHeader.css';

interface DayHeaderProps {
	date: Date;
}

/**
 * DayHeader
 * Displays a header for a given date, showing the day, month,
 * weekday, and optionally 'Today' or 'Yesterday'.
 * @param root0
 * @param root0.date
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
