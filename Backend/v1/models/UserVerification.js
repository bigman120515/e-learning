import mongoose from 'mongoose';

const userVerificationSchema = new mongoose.Schema({
    linkedinId: String,
    email: String,
    expiresAt: Date,
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});

export default mongoose.model('UserVerification', userVerificationSchema);