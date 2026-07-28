import { type ISettingRepository } from '../../../domain.interfaces/repositories.interfaces/setting.repository.interface.ts';

import { SettingModel } from '../../models/setting.model.ts';

export class MongoSettingRepository implements ISettingRepository {
	public async isInitialized(): Promise<boolean> {
		const setting = await SettingModel.findOne({ key: 'initialized' });

		return setting?.value === true;
	}

	public async markInitialized(): Promise<void> {
		await SettingModel.create({
			key: 'initialized',
			value: true,
		});
	}
}
