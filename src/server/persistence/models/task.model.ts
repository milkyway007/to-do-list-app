import mongoose, { type HydratedDocument, Schema } from 'mongoose';

export interface TaskPersistence {
	title: string;
	description?: string;
	deadline: Date;
}

const taskSchema = new Schema<TaskPersistence>({
	title: { type: String, required: true },
	description: { type: String, required: false },
	deadline: { type: Date, required: true },
});

export const TaskModel = mongoose.model<TaskPersistence>('Task', taskSchema);
export type TaskDocument = HydratedDocument<TaskPersistence>;
