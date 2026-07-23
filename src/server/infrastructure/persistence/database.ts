import mongoose from 'mongoose';

mongoose.connection.on('connected', () => console.log('MongoDB connected'));
mongoose.connection.on('open', () => console.log('MongoDB connection opened'));
mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected'));
mongoose.connection.on('reconnected', () => console.log('MongoDB reconnected'));
mongoose.connection.on('disconnecting', () => console.log('MongoDB disconnecting'));
mongoose.connection.on('close', () => console.log('MongoDB connection closed'));

export async function connectDatabase() {
    await mongoose.connect('mongodb://localhost:27017/todo-list-app')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log(`Error connecting to MongoDB: ${error}`);
    });
}