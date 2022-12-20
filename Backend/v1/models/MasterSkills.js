import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    skillName: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,

});

export default mongoose.model('MasterSkill', skillSchema);