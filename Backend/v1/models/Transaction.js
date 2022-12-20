import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    session:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session',
    },
    amount:Number,
    paid_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    transaction_date:Date,
    transaction_status:{
        type:String,
        enum:['Pending','Cancel','Success']
    },
    transaction_mode: String,
    
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});

export default mongoose.model('Transaction', transactionSchema);