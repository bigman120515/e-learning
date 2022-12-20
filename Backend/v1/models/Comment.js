import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    parentComment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        required: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    comment: {
        type: String,
        //required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,

});

export default mongoose.model('Comment', commentSchema);