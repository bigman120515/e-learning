import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
    },
    rating: {
        type: Number
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


export default mongoose.model('Skill', skillSchema);