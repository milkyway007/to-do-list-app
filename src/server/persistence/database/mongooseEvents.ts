import mongoose from 'mongoose';

/**
 *
 */
export function registerMongoEvents() {
	mongoose.connection.on('connected', () =>
		console.log('todo-list-app db is connected'),
	);
	mongoose.connection.on('open', () =>
		console.log('todo-list-app db connection opened'),
	);
	mongoose.connection.on('disconnected', () =>
		console.log('todo-list-app db disconnected'),
	);
	mongoose.connection.on('reconnected', () =>
		console.log('todo-list-app db reconnected'),
	);
	mongoose.connection.on('disconnecting', () =>
		console.log('todo-list-app db disconnecting'),
	);
	mongoose.connection.on('close', () =>
		console.log('todo-list-app db connection closed'),
	);
}
