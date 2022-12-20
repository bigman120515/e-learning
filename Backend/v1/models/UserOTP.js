import mongoose from 'mongoose';

const userOTPSchema = new mongoose.Schema({
    OTP: {
        type: String,
    },
    blocked: {
        type: Boolean,
    },
    isActive: {
        type: Boolean,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});

export default mongoose.model('UserOTP', userOTPSchema);