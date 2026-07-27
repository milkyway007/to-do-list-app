import { type Express } from 'express';

import { createTaskRouter } from './routes/task.routes.ts';

import { type Controllers } from './controllers/controllers.ts';

export class RouteRegistrator {
	private readonly app: Express;
	private readonly controllers: Controllers;

	constructor(app: Express, controllers: Controllers) {
		this.app = app;
		this.controllers = controllers;
	}

	public register(): void {
		this.app.use(
			'/api/tasks',
			createTaskRouter(this.controllers.taskController),
		);
	}
}
