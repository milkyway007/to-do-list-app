import mongoose, { type HydratedDocument, Schema } from 'mongoose';

export interface SettingPersistence {
	key: string;
	value: unknown;
}

const schema = new Schema<SettingPersistence>({
	key: { type: String, required: true, unique: true },
	value: { type: Schema.Types.Mixed, required: true },
});

export const SettingModel = mongoose.model<SettingPersistence>(
	'Setting',
	schema,
);
export type SettingDocument = HydratedDocument<SettingPersistence>;
