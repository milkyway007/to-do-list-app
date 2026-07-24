import mongoose from 'mongoose';

import { registerMongoEvents } from './mongooseEvents.ts';

export class DatabaseConnector {
	private readonly connectionString: string;

	constructor(connectionString: string) {
		this.connectionString = connectionString;
	}

	async run() {
		try {
			registerMongoEvents();

			await mongoose.connect(this.connectionString);

			console.log('Connected to todo-list-app db');
		} catch (error) {
			console.error('Error connecting to todo-list-app db:', error);

			throw error;
		}
	}
}
