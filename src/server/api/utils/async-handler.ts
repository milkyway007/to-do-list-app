import { type NextFunction, type Request, type Response } from 'express';

type AsyncRequestHandler = (
	req: Request,
	res: Response,
	next: NextFunction,
) => Promise<unknown>;

/**
 * Wraps an asynchronous request handler to automatically handle errors.
 * @param fn The async Express request handler.
 * @returns An Express middleware with automatic error handling.
 */
export const asyncHandler = (fn: AsyncRequestHandler) => {
	return (req: Request, res: Response, next: NextFunction) => {
		Promise.resolve(fn(req, res, next)).catch(next);
	};
};
