import mongoose from 'mongoose';

const notificationSettingSchema = new mongoose.Schema({
    likeComment: {
        type: Boolean,
        default: true
    },
    booking: {
        type: Boolean,
        default: true
    },
    emailNotification: {
        type: Boolean,
        default: true
    },
    pushNotification: {
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

export default mongoose.model('NotificationSetting', notificationSettingSchema);