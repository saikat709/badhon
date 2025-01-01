import mongoose from "mongoose";

const ProfileSchema = mongoose.Schema({
    picture: {
        type: String,
        required: false
    },
    aboutMe: {
        type: String,
        required: false,
    },
    number: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: false
    }
});

const Profile = new mongoose.model('Profile', ProfileSchema);

export default Profile;