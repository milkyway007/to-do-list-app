import express from 'express';
import core from 'express-serve-static-core';

import taskRouter from './routes/taskRoutes.ts';

export function createServer() {
    const app: core.Express = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use('/api/task', taskRouter);

    return app;
}

