import mongoose, { Schema } from 'mongoose';

const schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: false },
        deadline: { type: Date, required: true },
    },
    { timestamps: true }
);

const Task = mongoose.model('Task', schema);

export default Task;