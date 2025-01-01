import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    bloodRequest: {
        type: mongoose.Types.ObjectId,
        ref: 'BloodRequest',
    },
});


const Donation = new mongoose.model('Donation', DonationSchema);

export default Donation;