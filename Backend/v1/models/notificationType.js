import mongoose from 'mongoose';

const notificationTypeSchema = new mongoose.Schema({
    generalNotification: {
        type: String,
    },
    reminder: {
        type: Number,
    },
    connection: {
        type: String,
    },
    likeComment: {
        type: String,
    },
    newJoinee: {
        type: String,
    },
    suggestion: {
        type: String,
    },
    booking: {
        type: String,
    },
    mention: {
        type: String,
    },
    profileVisit: {
        type: String,
    },
    
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});

export default mongoose.model('NotificationType', notificationTypeSchema);