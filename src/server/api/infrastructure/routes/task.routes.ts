import express, { Router } from 'express';

import { asyncHandler } from '../../utils/async-handler.ts';

import { TaskController } from '../controllers/task.controller.ts';

/**
 *
 * @param taskController
 */
export function createTaskRouter(taskController: TaskController) {
	const router: Router = express.Router();

	router.get('/', asyncHandler(taskController.getAll.bind(taskController)));

	return router;
}
