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
 * @returns month name
 * @param monthIndex month index
 */
export function convert(monthIndex: number): string {
	return monthNames[monthIndex];
}
