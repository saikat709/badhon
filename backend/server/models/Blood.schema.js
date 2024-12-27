import mongoose from "mongoose";

const Blood = mongoose.Schema({
    group: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    lastDonated: {
        type: Date,
        required: false
    },
    unAvailableFrom: {
        type: Date,
        required: false
    },
    unAvailableTill: {
        type: Date,
        required: false
    },
    unAvailabilityReason: {
        type: String,
        required: false
    },
    donations: {
        type: Object,  // need relationship here
        required: false
    }
});

export default Blood;