import express from 'express';
import ViteExpress from 'vite-express';
import { PORT } from './constants/constants.ts';

const app = express();

app.use(express.json());

/*
export interface Task {
	id: string;
	title: string;
	description: string;
}
*/
app.post('/api/task', (req, res) => {
	const { title, description } = req.body;
	console.log('Received task:', { title, description });
	res.status(201).json({ message: 'Task created successfully' });
});

ViteExpress.listen(app, PORT, () => {
	console.log('Server is listening on port 3000...');
});
