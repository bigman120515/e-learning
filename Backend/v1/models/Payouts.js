import mongoose from 'mongoose'

const payoutSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    transactions:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
    },
    session:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session',
    },
    amount:Number,

    payout_date:Date,

    paid:{
        type:Boolean,
        default:false
    },
    
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});

export default mongoose.model('Payout', payoutSchema);