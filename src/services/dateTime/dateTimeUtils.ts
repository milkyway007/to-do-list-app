/**
 * Checks whether a given date is today.
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
 * Checks whether a given date is yesterday.
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
 * Returns the name of the weekday for a given date.
 */
export function getWeekdayName(date: Date): string {
	return weekdays[date.getDay()];
}
