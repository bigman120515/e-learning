import mongoose from 'mongoose';

const stateSchema = new mongoose.Schema({
    stateName: {
        type: String,
    },
    stateCode: {
        type: Number,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});

export default mongoose.model('State', stateSchema);