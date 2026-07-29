import { type IRequest } from './request.ts';

/**
 * Handles a specific request.
 */
export interface IRequestHandler<TRequest extends IRequest<TResult>, TResult> {
	handle(request: TRequest): Promise<TResult>;
}
