import ViteExpress from 'vite-express';

import { registerApplicationHandlers } from '../application/mediator/mediator.registration.ts';
import { Mediator } from '../application/mediator/mediator.ts';
import { DatabaseInitializer } from '../application/services/initialization/database.initializer.ts';
import { TaskInitializer } from '../application/services/initialization/task.initializer.ts';

import { DatabaseConnector } from '../persistence/database/database.connector.ts';
import { MongoSettingRepository } from '../persistence/repositories/mongo/mongo.setting.repository.ts';
import { MongoTaskRepository } from '../persistence/repositories/mongo/mongo.task.repository.ts';

import { MONGODB_URI, PORT } from './constants/constants.ts';

import { TaskController } from './infrastructure/controllers/task.controller.ts';
import { ExpressServerBuilder } from './infrastructure/express-server.builder.ts';
import { RouteRegistrar } from './infrastructure/routes/route.registrar.ts';

import { errorHandler } from './middlewares/error.middleware.ts';

/**
 * Initializes and starts the application.
 *
 * Establishes the database connection, initializes required data,
 * configures dependencies, registers routes, and starts the server.
 * @returns A promise that resolves when the application is started.
 */
export async function bootstrap() {
	//database connection
	const databaseConnector = new DatabaseConnector(MONGODB_URI);
	await databaseConnector.connect();

	//repositories
	const taskRepository = new MongoTaskRepository();
	const settingRepository = new MongoSettingRepository();

	//database initializers
	const taskInitializer = new TaskInitializer(taskRepository);
	const databaseInitializer = new DatabaseInitializer(
		settingRepository,
		taskInitializer,
	);
	await databaseInitializer.run();

	const mediator = new Mediator();

	registerApplicationHandlers(mediator, taskRepository);

	//controllers
	const taskController = new TaskController(mediator);

	const app = new ExpressServerBuilder().build();

	// routes
	new RouteRegistrar(app, { taskController }).register();

	app.use(errorHandler);

	ViteExpress.listen(app, PORT, () => {
		console.log(`Server is listening on port ${PORT}...`);
	});
}
