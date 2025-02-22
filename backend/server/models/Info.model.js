import mongoose from "mongoose";

const InfoSchema = mongoose.Schema({
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
    unAvailableTo: {
        type: Date,
        required: false
    },
    unAvailabilityReason: {
        type: String,
        required: false
    },
    donations: [{
        type: mongoose.Types.ObjectId,
        ref: 'Donation',
        required: false
    }]
}, { timrstamps: true } );

const Info = new mongoose.model('Info', InfoSchema)

export default Info;