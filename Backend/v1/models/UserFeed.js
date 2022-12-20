import mongoose from "mongoose";

const UserFeedSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    body: {
        type: String,
    },
    photo: [String],
    file: [String],
    article: {
        type: String
    },
});

export default mongoose.model('userFeed', UserFeedSchema);