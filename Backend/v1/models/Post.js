import mongoose from "mongoose";

// feeling/activity
// total like/reactions
// likedBy
// total comments
// comments
// totalShare
// sharedBy

const postSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    parentPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    },
    postType: {
        type: String,  
    },
    body: {
        type: String,
    }, 
    photo:[String],
    video:[String], 
    docs:[String],         
    event: {
        type: Date, // It could be fetched from another collection
    },
    feeling: {
        type: String,
        enum: ["Happy", "Sad", "Excited", "Thinking",]
    },
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }],
    share:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
}
);

export default mongoose.model('Post', postSchema);