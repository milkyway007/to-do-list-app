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

const monthNames = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
] as const;

/**
 * Converts a zero-based month index to its corresponding month name.
 * @param monthIndex The month index ranging from 0 (January) to 11 (December).
 * @returns The abbreviated month name.
 */
export function getShortMonthName(monthIndex: number): string {
	if (monthIndex < 0 || monthIndex > 11) {
		throw new RangeError(
			`Invalid month index: ${monthIndex}. Expected a value between 0 and 11.`,
		);
	}

	return monthNames[monthIndex];
}
