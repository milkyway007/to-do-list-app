import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './app/layout/styles.css';
import { App } from './app/layout/App.tsx';

import 'bulma/css/bulma.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');
createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
