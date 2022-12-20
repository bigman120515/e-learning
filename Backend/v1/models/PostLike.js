import mongoose from 'mongoose'
const postLikeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
}
);

export default mongoose.model('postLike', postLikeSchema);
