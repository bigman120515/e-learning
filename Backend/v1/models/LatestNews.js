import mongoose from 'mongoose';

const latestSchema = new mongoose.Schema({
    title: {
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
export default mongoose.model('LatestNews', latestSchema);