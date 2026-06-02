import express from 'express';
import ViteExpress from 'vite-express';
import { PORT } from './constants/constants.js';

const app = express();

ViteExpress.listen(app, PORT, () => {
	console.log('Server is listening on port 3000...');
});
