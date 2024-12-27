import mongoose from "mongoose";

const User = mongoose.Schema({
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        unique: true, 
        required: false
    },
    number: { 
        type: String, 
        unique: true,
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },

    blood: {
        type: Object,
        require: true, 
    },

    profile: {
        type: Object,
        required: false
    },
    type: {         // moderator, admin, 
        type: String 
    }
});

export default User;