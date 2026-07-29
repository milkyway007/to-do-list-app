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
 * Renders a header for a task group associated with a specific date.
 * @param props Component properties.
 * @returns The rendered day header component.
 */
export function DayHeader(props: DayHeaderProps) {
	const { date } = props;
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
