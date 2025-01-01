import mongoose from "mongoose";


const WorkTimeSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User', required: true,
        },
        start: {
            type: Date, required: true,
            default: new Date.now(),
        },
        end: {
            type: Date, required: false,
        },
    },
    { timestamps: true }
);

const WorkTime = new mongoose.model('WorkTime', WorkTimeSchema);

export default WorkTime;