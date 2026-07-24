import mongoose, { Schema } from 'mongoose';

const schema = new Schema(
    {
        key: { type: String, required: true },
    },
    { timestamps: true }
);

const Setting = mongoose.model('Setting', schema);

export default Setting;