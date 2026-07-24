import express from 'express';

import taskRouter from './routes/task.routes.ts';

export class ServeRunner {
	public run() {
		const app = express();

		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));

		app.use('/api/task', taskRouter);

		return app;
	}
}
