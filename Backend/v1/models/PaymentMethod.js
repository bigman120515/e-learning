import mongoose from 'mongoose'

const paymentMethodSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    paypal: {
        type: String,
    },
    velmo: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});

export default mongoose.model('PaymentMethod', paymentMethodSchema);