import { type NextFunction, type Request, type Response } from 'express';

import { ApiError } from '../error-types/api-error.ts';

/**
 * Handles application errors and sends an appropriate HTTP response.
 * @param err The error that occurred during request processing.
 * @param req The incoming HTTP request.
 * @param res The HTTP response object.
 * @param _ The unused next middleware function.
 * @returns The HTTP response containing the error details.
 */
export const errorHandler = (
	err: Error | ApiError,
	req: Request,
	res: Response,
	_: NextFunction,
): Response => {
	if (err instanceof ApiError) {
		return res.status(err.statusCode).json({
			success: false,
			error: {
				message: err.message,
				statusCode: err.statusCode,
			},
		});
	}

	// Unhandled errors
	console.error('Unexpected error:', err);

	return res.status(500).json({
		success: false,
		error: {
			message: 'Internal server error',
		},
	});
};
