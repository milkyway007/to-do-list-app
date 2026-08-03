import { createBrowserRouter } from 'react-router';

import { App } from '../layout/App.tsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
]);
