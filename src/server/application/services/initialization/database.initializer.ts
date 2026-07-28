import { type ISettingRepository } from '../../../domain.interfaces/repositories.interfaces/setting.repository.interface.ts';

import { TaskInitializer } from './task.initializer.ts';

/**
 *
 */
export class DatabaseInitializer {
	private readonly settingRepository: ISettingRepository;
	private readonly taskInitializer: TaskInitializer;

	/**
	 *
	 * @param settingRepository
	 * @param taskInitializer
	 */
	constructor(
		settingRepository: ISettingRepository,
		taskInitializer: TaskInitializer,
	) {
		this.settingRepository = settingRepository;
		this.taskInitializer = taskInitializer;
	}

	/**
	 *
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
