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
 * Converts a zero-based month index to its corresponding month name.
 * @param monthIndex The month index ranging from 0 (January) to 11 (December).
 * @returns The abbreviated month name.
 */
export function convert(monthIndex: number): string {
	if (monthIndex < 0 || monthIndex > 11) {
		throw new RangeError(
			`Invalid month index: ${monthIndex}. Expected a value between 0 and 11.`,
		);
	}

	return monthNames[monthIndex];
}
