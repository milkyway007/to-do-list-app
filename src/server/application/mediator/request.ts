/**
 * Represents a request that can be handled by a mediator.
 */
export interface IRequest<TResult> {
	readonly resultType: TResult;
}
