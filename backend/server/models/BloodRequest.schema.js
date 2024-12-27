import mongoose from "mongoose";

const BloodRequest = mongoose.Schema({
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

});

export default BloodRequest;