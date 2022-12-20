import mongoose from "mongoose";
const ConnectionsSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    connection:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    isAccepted:{
        type:Boolean,
        default:false
    },
    isRejected:{
        type:Boolean,
        default:false
    },
    isBlocked:{
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
}
);
export default  mongoose.model('Connections', ConnectionsSchema);