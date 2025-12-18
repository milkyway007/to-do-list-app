/**
 * @returns Determines whether a date is today
 * @param date a date to compare
 */
export function isToday(date: Date): boolean {
	const today = new Date();

	return (
		date.getFullYear() === today.getFullYear() &&
		date.getMonth() === today.getMonth() &&
		date.getDate() === today.getDate()
	);
}

/**
 * @returns Determines whether a date is yesterday
 * @param date a date to compare
 */
export function isYesterday(date: Date): boolean {
	const today = new Date();

	return (
		date.getFullYear() === today.getFullYear() &&
		date.getMonth() === today.getMonth() &&
		date.getDate() === today.getDate() - 1
	);
}

const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
] as const;

/**
 * @returns maps date to a weekday
 * @param date a date to map
 */
export function getWeekdayName(date: Date): string {
	return weekdays[date.getDay()];
}
