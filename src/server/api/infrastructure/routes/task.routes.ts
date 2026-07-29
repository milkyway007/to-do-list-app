import express, { Router } from 'express';

import { asyncHandler } from '../../utils/async-handler.ts';

import { TaskController } from '../controllers/task.controller.ts';

/**
 * Creates and configures an Express router for task endpoints.
 * @param taskController The task controller used to handle incoming requests.
 * @returns An Express router with registered task routes.
 */
export function createTaskRouter(taskController: TaskController) {
	const router: Router = express.Router();

	router.get('/', asyncHandler(taskController.getAll.bind(taskController)));

	return router;
}
