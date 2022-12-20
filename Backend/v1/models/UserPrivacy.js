import mongoose from 'mongoose';

const userPrivacySchema = new mongoose.Schema({
    about: {
        type: Boolean,
        default: true
    },
    experience: {
        type: Boolean,
        default: true
    },
    education: {
        type: Boolean,
        default: true
    },
    skill: {
        type: Boolean,
        default: true
    },
    email: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});

export default mongoose.model('UserPrivacy', userPrivacySchema);