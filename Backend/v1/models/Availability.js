import mongoose from 'mongoose'

const availabilitySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    days: [{
        day: {
            type: String,
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
        timings: [{
            startTime: Date,
            endTime: Date
        }],
    }],
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    { timestamps: true }
);


export default mongoose.model('Availability', availabilitySchema);