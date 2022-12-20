import mongoose from 'mongoose';
import City from './City';

const locationSchema = new mongoose.Schema({
    areaName: {
        type: String,
    },
    zipCode: {
        type: Number,
    },
    city: {
        ref: 'City',
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});
export default mongoose.model('Location', locationSchema);