import { type ISettingRepository } from '../../../domain.interfaces/repositories.interfaces/setting.repository.interface.ts';

import { SettingModel } from '../../models/setting.model.ts';

/**
 * Provides persistence operations for settings using MongoDB via Mongoose.
 */
export class MongoSettingRepository implements ISettingRepository {
	/**
	 * Checks whether the application has been initialized.
	 * @returns True if the initialization flag is set, otherwise false.
	 */
	public async isInitialized(): Promise<boolean> {
		const setting = await SettingModel.findOne({ key: 'initialized' });

		return setting?.value === true;
	}

	/**
	 * Marks the application as initialized.
	 * @returns A promise that resolves when the initialization flag has been saved.
	 */
	public async markInitialized(): Promise<void> {
		await SettingModel.create({
			key: 'initialized',
			value: true,
		});
	}
}
