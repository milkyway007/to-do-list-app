import ViteExpress from 'vite-express';

import { DatabaseInitializer } from '../application/services/initialization/database.initializer.ts';
import { TaskInitializer } from '../application/services/initialization/task.initializer.ts';
import { GetAllTasksUseCase } from '../application/use-cases/task/get-all-tasks.use-case.ts';

import { DatabaseConnector } from '../persistence/database/database.connector.ts';
import { MongoSettingRepository } from '../persistence/repositories/mongo/mongo.setting.repository.ts';
import { MongoTaskRepository } from '../persistence/repositories/mongo/mongo.task.repository.ts';

import { MONGODB_URI, PORT } from './constants/constants.ts';

import { TaskController } from './infrastructure/controllers/task.controller.ts';
import { RouteRegistrator } from './infrastructure/routes/route.registrator.ts';
import { ServeRunner } from './infrastructure/server.runner.ts';

import { errorHandler } from './middlewares/error.middleware.ts';

/**
 *
 */
export async function bootstrap() {
	//database connection
	const databaseConnector = new DatabaseConnector(MONGODB_URI);
	await databaseConnector.run();

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

	//use cases
	const getAllTasksUseCase = new GetAllTasksUseCase(taskRepository);

	//controllers
	const taskController = new TaskController(getAllTasksUseCase);

	const app = new ServeRunner().run();

	// routes
	new RouteRegistrator(app, { taskController }).register();

	app.use(errorHandler);

	ViteExpress.listen(app, PORT, () => {
		console.log(`Server is listening on port ${PORT}...`);
	});
}
