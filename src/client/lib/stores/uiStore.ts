import { makeAutoObservable } from 'mobx';

/**
 * Store responsible for managing the global UI state.
 */
export class UiStore {
	isLoading = false;

	/**
	 * Creates the UI store and makes all properties
	 * and methods observable by MobX.
	 */
	constructor() {
		makeAutoObservable(this);
	}

	/**
	 * Sets the application to the loading state.
	 */
	isBusy() {
		this.isLoading = true;
	}

	/**
	 * Clears the loading state.
	 */
	isIdle() {
		this.isLoading = false;
	}
}
