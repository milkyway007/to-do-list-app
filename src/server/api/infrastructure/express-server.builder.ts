import express, { type Express } from 'express';

/**
 * Provides a builder for creating a configured Express application.
 */
export class ExpressServerBuilder {
	/**
	 * Builds an Express application with required middleware.
	 * @returns A configured Express application instance.
	 */
	public build(): Express {
		const app = express();

		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));

		return app;
	}
}
