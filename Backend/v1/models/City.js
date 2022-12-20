import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
    cityName: {
        type: String,
    },
    cityCode: {
        type: Number,
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


export default mongoose.model('City', citySchema);