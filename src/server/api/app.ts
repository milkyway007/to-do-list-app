import express from 'express';
import core from 'express-serve-static-core';
import ViteExpress from 'vite-express';

import taskRouter from './routes/taskRoutes.ts';

import { PORT } from './constants/constants.ts';

const app: core.Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/task', taskRouter);

ViteExpress.listen(app, PORT, () => {
	console.log(`Server is listening on port ${PORT}...`);
});
