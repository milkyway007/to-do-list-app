import { StrictMode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './app/layout/styles.css';
import { App } from './app/layout/App.tsx';

import 'bulma/css/bulma.css';

import { createRoot } from 'react-dom/client';

const queryClient = new QueryClient();

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');
createRoot(root).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<App />
		</QueryClientProvider>
	</StrictMode>,
);
