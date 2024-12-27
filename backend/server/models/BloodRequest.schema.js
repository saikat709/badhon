import mongoose from "mongoose";

const BloodRequestSchema = new mongoose.Schema(
    {
        group: {
            type: String,
            required: true
        },
        hospital: {
            type: String,
            required: true
        },
        time: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
    },
    { timestamps: true }
);

const BloodRequest = mongoose.model( 'BloodRequest', BloodRequest );

export default BloodRequest;