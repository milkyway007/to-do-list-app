import { ApiError } from './api-error.ts';

/**
 * Represents an error when a requested resource cannot be found.
 */
export class NotFoundError extends ApiError {
	/**
	 * Creates a new not found error.
	 * @param message The error message.
	 */
	constructor(message = 'Resource not found') {
		super(404, message);
	}
}
