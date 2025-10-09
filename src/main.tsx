import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import './index.css';
import 'bulma/css/bulma.css';

console.log('Here!',);
createRoot(document.getElementById('root',)!,).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
