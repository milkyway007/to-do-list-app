import { type Express } from 'express';

import { type Controllers } from '../controllers/controllers.ts';

import { createTaskRouter } from './task.routes.ts';

/**
 * Registers application routes and connects them with controllers.
 */
export class RouteRegistrar {
	private readonly app: Express;
	private readonly controllers: Controllers;

	/**
	 * Creates a new route registrator.
	 * @param app The Express application instance.
	 * @param controllers The application controllers used by routes.
	 */
	constructor(app: Express, controllers: Controllers) {
		this.app = app;
		this.controllers = controllers;
	}

	/**
	 * Registers all application routes.
	 */
	public register(): void {
		this.app.use(
			'/api/tasks',
			createTaskRouter(this.controllers.taskController),
		);
	}
}
