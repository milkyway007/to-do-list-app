import ViteExpress from 'vite-express';

import { DatabaseInitializer } from '../application/services/initializers/database.initializer.ts';
import { TaskInitializer } from '../application/services/initializers/task.initializer.ts';

import { MONGODB_URI, PORT } from './constants/constants.ts';

import { DatabaseConnector } from '../persistence/database/database.connector.ts';
import { MongoSettingRepository } from '../persistence/repositories/mongo/mongo.setting.repository.ts';
import { MongoTaskRepository } from '../persistence/repositories/mongo/mongo.task.repository.ts';
import { ServeRunner } from './server.runner.ts';

/**
 *
 */
export async function bootstrap() {
	const databaseConnector = new DatabaseConnector(MONGODB_URI);
	await databaseConnector.run();

	const taskRepository = new MongoTaskRepository();
	const settingRepository = new MongoSettingRepository();
	const taskInitializer = new TaskInitializer(taskRepository);
	const databaseInitializer = new DatabaseInitializer(
		settingRepository,
		taskInitializer,
	);
	await databaseInitializer.run();

	const app = new ServeRunner().run();

	ViteExpress.listen(app, PORT, () => {
		console.log(`Server is listening on port ${PORT}...`);
	});
}
