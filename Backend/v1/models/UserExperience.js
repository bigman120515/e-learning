import mongoose from 'mongoose';

const userExperienceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    jobTitle: {
        type: String,
        required: true,
    },
    employementType: {
        type: String,
       // required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    present: {
        type: Boolean,
    },
    description: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    { timestamps: true }
);

export default mongoose.model('UserExperience', userExperienceSchema);