import mongoose from 'mongoose';

const userJobInfoSchema = new mongoose.Schema({
    linkedinId: {
        type: String,
        require: true
    },
    jobTitle: {
        type: String,
        require: true
    },
    employmentType: {
        type: String,
        require: true
    },
    companyName: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    isActive: {
        type: Boolean,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});

export default mongoose.model('UserJobInfo', userJobInfoSchema);