import mongoose from 'mongoose';

const timeZoneSchema = new mongoose.Schema({
    timeZoneName: {
        type: String,
    },
    offset: {
        type: Date,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});

export default mongoose.model('TimeZone', timeZoneSchema);