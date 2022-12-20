import mongoose from 'mongoose'

const pricingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    skill: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
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

export default mongoose.model('Pricing', pricingSchema);