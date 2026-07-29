import { type ISettingRepository } from '../../../domain.interfaces/repositories.interfaces/setting.repository.interface.ts';

import { TaskInitializer } from './task.initializer.ts';

/**
 * Initializes the database with required application data.
 */
export class DatabaseInitializer {
	private readonly settingRepository: ISettingRepository;
	private readonly taskInitializer: TaskInitializer;

	/**
	 * Creates a new database initializer.
	 * @param settingRepository The repository used to track database initialization status.
	 * @param taskInitializer The initializer used to create default tasks.
	 */
	constructor(
		settingRepository: ISettingRepository,
		taskInitializer: TaskInitializer,
	) {
		this.settingRepository = settingRepository;
		this.taskInitializer = taskInitializer;
	}

	/**
	 * Initializes the database if it has not been initialized yet.
	 * @returns A promise that resolves when the initialization is completed.
	 */
	public async run(): Promise<void> {
		if (await this.settingRepository.isInitialized()) {
			return;
		}

		await this.taskInitializer.run();
		console.log('Default tasks created.');

		await this.settingRepository.markInitialized();
		console.log('Database marked as initialized.');
	}
}
