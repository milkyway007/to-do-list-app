import { ApiError } from './api-error.ts';

/**
 * Represents an error caused by missing or invalid authentication.
 */
export class UnauthorizedError extends ApiError {
	/**
	 * Creates a new unauthorized error.
	 * @param message The error message.
	 */
	constructor(message = 'Unauthorized') {
		super(401, message);
	}
}
