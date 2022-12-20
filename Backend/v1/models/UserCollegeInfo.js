import mongoose from 'mongoose';

const userCollegeInfoSchema = new mongoose.Schema({
    linkedinId: {
        require: true,
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    collegeName: {
        type: String,
        require: true
    },
    startYear: {
        type: Date,
        require: true
    },
    EndYear: {
        type: Date,
    },
    hasCompleted: {
        type: Boolean,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
    },
},
    { timestamps: true }
);

export default mongoose.model('UserCollegeInfo', userCollegeInfoSchema);