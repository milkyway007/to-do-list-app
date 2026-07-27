import { type NextFunction, type Request, type Response } from 'express';

import { ApiError } from '../error.types.ts';

export const errorHandler = (
	err: Error | ApiError,
	req: Request,
	res: Response,
	_: NextFunction,
) => {
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
