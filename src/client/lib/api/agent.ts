import axios from 'axios';

import { store } from '../stores/store.ts';

const sleep = (delay: number) =>
	new Promise((resolve) => setTimeout(resolve, delay));

const agent = axios.create({
	baseURL: import.meta.env.VITE_API_URL as string,
});

agent.interceptors.request.use((config) => {
	store.uiStore.isBusy();
	return config;
});

agent.interceptors.response.use(async (response) => {
	try {
		await sleep(1000);
		return response;
	} catch (error) {
		console.error(error);
		throw error instanceof Error ? error : new Error(String(error));
	} finally {
		store.uiStore.isIdle();
	}
});

export default agent;
