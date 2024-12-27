import mongoose from "mongoose";


const Profile = mongoose.Schema({
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
        required: true
    },
    address: {
        type: Stringx,
        required: false
    }
});

export default Profile;