import mongoose from 'mongoose';
import user from './User.js';

const NotificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    notificationType: {
        type: String,
    },
    link: {
        type: String,
    },
    isRead: {
        type: Boolean
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});
export default mongoose.model('Notification', NotificationSchema);