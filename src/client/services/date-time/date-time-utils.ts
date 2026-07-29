/**
 * Determines whether a given date represents the current day.
 * @param date The date to check.
 * @returns `true` if the date is today; otherwise, `false`.
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
 * Determines whether a given date represents the previous day.
 * @param date The date to check.
 * @returns `true` if the date is yesterday; otherwise, `false`.
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

type Weekday = (typeof weekdays)[number];

/**
 * Gets the weekday name for a given date.
 * @param date The date used to determine the weekday.
 * @returns The name of the weekday.
 */
export function getWeekdayName(date: Date): Weekday {
	return weekdays[date.getDay()];
}
