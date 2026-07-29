import mongoose from 'mongoose';

import { registerMongoEvents } from './mongoose.events.ts';

/**
 * Provides functionality for establishing a connection to the MongoDB database.
 */
export class DatabaseConnector {
	private readonly connectionString: string;

	/**
	 * Creates a new database connector.
	 * @param connectionString The MongoDB connection string.
	 */
	constructor(connectionString: string) {
		this.connectionString = connectionString;
	}

	/**
	 * Establishes a connection to the MongoDB database.
	 * @returns A promise that resolves when the database connection is established.
	 */
	async connect() {
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
