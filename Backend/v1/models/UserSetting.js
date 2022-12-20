import mongoose from 'mongoose';

const userSettingSchema = new mongoose.Schema({
    autoPlayVideo: {
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

export default mongoose.model('UserSetting', userSettingSchema);