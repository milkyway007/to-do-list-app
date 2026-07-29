import { type Mediator } from '../../../application/mediator/mediator.ts';

/**
 *
 */
export class BaseApiController {
	protected readonly mediator: Mediator;

	/**
	 * Creates a new task controller.
	 * @param mediator The mediator used to dispatch application requests.
	 */
	constructor(mediator: Mediator) {
		this.mediator = mediator;
	}
}
