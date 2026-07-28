export interface ISettingRepository {
	isInitialized(): Promise<boolean>;
	markInitialized(): Promise<void>;
}
