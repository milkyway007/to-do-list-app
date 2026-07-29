import { ApiError } from './api-error.ts';

/**
 * Represents an error caused by invalid input data.
 */
export class ValidationError extends ApiError {
	/**
	 * Creates a new validation error.
	 * @param message The error message.
	 */
	constructor(message = 'Validation failed') {
		super(400, message);
	}
}
