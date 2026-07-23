import { connection, connect } from 'mongoose';

connection.on('connected', () => console.log('MongoDB connected'));
connection.on('open', () => console.log('MongoDB connection opened'));
connection.on('disconnected', () => console.log('MongoDB disconnected'));
connection.on('reconnected', () => console.log('MongoDB reconnected'));
connection.on('disconnecting', () => console.log('MongoDB disconnecting'));
connection.on('close', () => console.log('MongoDB connection closed'));

export async function connectDatabase() {
    await connect('mongodb://localhost:27017/todo-list-app')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log(`Error connecting to MongoDB: ${error}`);
    });
}