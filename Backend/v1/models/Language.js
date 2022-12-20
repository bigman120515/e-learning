import mongoose from 'mongoose'

const languageSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    language: {
        type: String,
        required: true,
    },
    proficient: {
        type: String,
//enum: ['Beginner', 'Intermediate', 'Expert'],
        enum:['Elementary proficiency', 'Limited working proficiency','Professional working proficiency',
        'Full professional proficiency','Native or bilingual proficiency'],
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});


export default mongoose.model('Language', languageSchema);