/**
 * Represents a base API error with an HTTP status code.
 */
export class ApiError extends Error {
	public readonly statusCode: number;
	public message: string;
	public isOperational = true;

	/**
	 * Creates a new API error.
	 * @param statusCode The HTTP status code associated with the error.
	 * @param message The error message.
	 * @param isOperational Indicates whether the error is expected during application operation.
	 */
	constructor(statusCode: number, message: string, isOperational = true) {
		super(message);

		this.statusCode = statusCode;
		this.message = message;
		this.isOperational = isOperational;

		Object.setPrototypeOf(this, ApiError.prototype);
	}
}
