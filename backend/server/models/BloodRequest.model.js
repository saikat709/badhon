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
        city: {

        },
        area: {

        },
        time: {
            type: Number,
            required: true
        },
        deadline: {
            type: Date,
            required: true
        },
    },
    { timestamps: true }
);

const BloodRequest = new mongoose.model( 'BloodRequest', BloodRequestSchema );

export default BloodRequest;