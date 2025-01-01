import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    deviceName: {
        type: String,
        required: false,
    },
    browserAgent: {
        type: String,
        required: false,
    },
    logoutOn: {
        type: Date,
        required: false,
    }
}, { timeseries: true } );


const Login = new mongoose.model('Login', LoginSchema);

export default Login;