import mongoose from 'mongoose';

const userEducationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  
    },
    collegeName: {
        type: String,
        required: true
    },
    degreeName: {
        type: String,
        required: true
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    startYear: {
        type: Date,
        required: true
    },
    endYear: {
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
        default: false
    },
},
    { timestamps: true }
);

export default mongoose.model('UserEducation', userEducationSchema);