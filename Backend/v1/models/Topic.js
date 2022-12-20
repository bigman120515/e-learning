import mongoose from 'mongoose';

const topicSchema = new mongoose.Schema({
    topicName: {
        type: Array,
    },

    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});

export default mongoose.model('Topic', topicSchema);