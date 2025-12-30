const monthNames = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'June',
	'July',
	'Aug',
	'Sept',
	'Oct',
	'Nov',
	'Dec',
] as const;

/**
 * Converts a month index (0-11) to its corresponding month name.
 */
export function convert(monthIndex: number): string {
	return monthNames[monthIndex];
}
