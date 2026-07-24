import express, { Router } from 'express';

const taskRouter: Router = express.Router();

taskRouter.get('/', getTasksByDate);

export default taskRouter;
