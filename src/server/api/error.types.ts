/**
 *
 */
export class ApiError extends Error {
	public statusCode: number;
	public message: string;
	public isOperational = true;

	/**
	 *
	 * @param statusCode
	 * @param message
	 * @param isOperational
	 */
	constructor(statusCode: number, message: string, isOperational = true) {
		super(message);

		this.statusCode = statusCode;
		this.message = message;
		this.isOperational = isOperational;

		Object.setPrototypeOf(this, ApiError.prototype);
	}
}

/**
 *
 */
export class NotFoundError extends ApiError {
	/**
	 *
	 * @param message
	 */
	constructor(message = 'Resource not found') {
		super(404, message);
	}
}

/**
 *
 */
export class ValidationError extends ApiError {
	/**
	 *
	 * @param message
	 */
	constructor(message = 'Validation failed') {
		super(400, message);
	}
}

/**
 *
 */
export class UnauthorizedError extends ApiError {
	/**
	 *
	 * @param message
	 */
	constructor(message = 'Unauthorized') {
		super(401, message);
	}
}
