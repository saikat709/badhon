import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: { 
            type: String, 
            required: true 
        },
        lastName: { 
            type: String, 
            required: false
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

        info: {
            type: mongoose.Types.ObjectId,
            ref: 'Info',
            required: true,
        },
        profile: {
            type: mongoose.Types.ObjectId,
            ref: 'Profile',
            required: false,
        },
        type: {         // moderator, admin, 
            type: String,
            enum: [ 'register', 'volunteer', 'donor' ]
        }
    },
    { timestamps: true },
);


UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model( 'User', UserSchema );
export default User;