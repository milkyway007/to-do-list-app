/**
 * Ensures that all possible cases of a union type have been handled.
 * @param value The unhandled value from an exhaustive check.
 */
export function assertNever(value: never): never {
	throw new Error(`Unsupported context: ${String(value)}`);
}
