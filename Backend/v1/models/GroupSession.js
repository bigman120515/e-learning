import mongoose from "mongoose";
const GroupSessionSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    title:String,
    description:String,
    topic:String,
    language:{
        type:String,
        enum: ['Hindi', 'English', 'Urdu'],
    },
    enroll:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    duration:Number,
    isDeleted: {
        type: Boolean,
        default: false,
    }

},
{
    timestamps: true,
}
);
export default mongoose.model('GroupSession', GroupSessionSchema);