import { useContext } from 'react';

import { StoreContext } from '../stores/store.ts';

/**
 * Returns the application's root MobX store
 * from the React context.
 * @returns The application store.
 */
export function useStore() {
	return useContext(StoreContext);
}
