import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    accountSettings: {
        feedPreferences: {
            type: String,
            enum: ['Normal', 'Average', 'Advance'], // Options will be given after mockup
        },
        autoPlayVideos: {
            type: Boolean,
            default: false,
        },
        show: {
            type: Boolean,
            default: false,
        },
    },
    notification: {
        likeComments: {
            type: Boolean,
            default: false,
        },
        subscriptionBookings: {
            type: Boolean,
            default: false,
        },
        emailNotification: {
            type: Boolean,
            default: false,
        },
        pushNotification: {
            type: Boolean,
            default: false,
        },
    },
    privacy: {
        about: {
            type: Boolean,
            default: false,
        },
        experience: {
            type: Boolean,
            default: false,
        },
        education: {
            type: Boolean,
            default: false,
        },
        skillsTopics: {
            type: Boolean,
            default: false,
        },
        email: {
            type: Boolean,
            default: false,
        },
    },
});

export default mongoose.model('settings', SettingsSchema);