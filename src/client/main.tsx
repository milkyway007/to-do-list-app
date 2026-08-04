import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { router } from './app/router/Routes.tsx';

import { store, StoreContext } from './lib/stores/store.ts';

import 'bulma/css/bulma.css';

import './app/layout/styles.css';

const queryClient = new QueryClient();

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');
createRoot(root).render(
	<StrictMode>
		<StoreContext.Provider value={store}>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<RouterProvider router={router} />
			</QueryClientProvider>
		</StoreContext.Provider>
	</StrictMode>,
);
