import { type IRequest } from './request.ts';
import { type IRequestHandler } from './request-handler.ts';
import { type Constructor } from './types.ts';

/**
 * Represents a registered request handler that can process incoming requests.
 */
interface RegisteredHandler {
	handle(request: unknown): Promise<unknown>;
}

/**
 * Dispatches requests to their corresponding handlers.
 */
export class Mediator {
	/**
	 * Stores mappings between request types and their handlers.
	 */
	private readonly handlers = new Map<
		Constructor<unknown>,
		RegisteredHandler
	>();

	/**
	 * Registers a handler for a specific request type.
	 * @param request The request constructor used to identify the handler.
	 * @param handler The handler responsible for processing the request.
	 */
	public register<TRequest extends IRequest<TResult>, TResult>(
		request: Constructor<TRequest>,
		handler: IRequestHandler<TRequest, TResult>,
	): void {
		this.handlers.set(request, {
			handle: (request: unknown) => handler.handle(request as TRequest),
		});
	}

	/**
	 * Sends a request to its registered handler.
	 * @param request The request to execute.
	 * @returns The result produced by the request handler.
	 */
	public async send<TResult>(request: IRequest<TResult>): Promise<TResult> {
		const handler = this.handlers.get(
			request.constructor as Constructor<IRequest<TResult>>,
		);

		if (!handler) {
			throw new Error(`Handler not found for ${request.constructor.name}`);
		}

		return handler.handle(request) as Promise<TResult>;
	}
}
