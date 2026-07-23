import express from 'express';

import taskRouter from './routes/taskRoutes.ts';

export function createServer() {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api/task', taskRouter);

    return app;
}