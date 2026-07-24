import mongoose from 'mongoose';

mongoose.connection.on('connected', () => console.log('todo-list-app db is connected'));
mongoose.connection.on('open', () => console.log('todo-list-app db connection opened'));
mongoose.connection.on('disconnected', () => console.log('todo-list-app db disconnected'));
mongoose.connection.on('reconnected', () => console.log('todo-list-app db reconnected'));
mongoose.connection.on('disconnecting', () => console.log('todo-list-app db disconnecting'));
mongoose.connection.on('close', () => console.log('todo-list-app db connection closed'));

export async function connectDatabase() {
    await mongoose.connect('mongodb://localhost:27017/todo-list-app')
    .then(() => {
        console.log('Connected to todo-list-app db');
    })
    .catch((error) => {
        console.log(`Error connecting to todo-list-app db: ${error}`);
    });
}