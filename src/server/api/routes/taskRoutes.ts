import express, { Router, type Request, type Response } from 'express';

const taskRouter: Router = express.Router();

/*
export interface Task {
	id: string;
	title: string;
	description: string;
}
*/
taskRouter.post('/', (req: Request, res: Response) => {
	const { title, description } = req.body;
	console.log('Received task:', { title, description });
	res.status(201).json({ message: 'Task created successfully', task: { title, description }  });
});

export default taskRouter;