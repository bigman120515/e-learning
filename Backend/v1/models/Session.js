import mongoose from 'mongoose'

const sessionSchema = new mongoose.Schema({
    mentees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    sessionType:{
        type:String,
        enum:['GroupSession','OneToOneSession'],
        require:true
    },
    skill: {
        type: String,
    },
    bannerImage:{
        type: String,
    },
    title:{
            require: true,
            type: String,
    },
    duration: {
        type: String,
    },
    amount: {
        type: Number,
    },
    date: {
        type: Date,
    },
    time: {
        type: String,
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    isCancelled: {
        status: {
            type: Boolean,
            default: false
        },
        cancelledAt: {
            type: Date,
            default: new Date()
        },
        cancelledBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        reason:String
    },
    isRejected: {
        status: {
            type: Boolean,
            default: false
        },
        rejecteAt: {
            type: Date,
            default: new Date()
        },
        rejectedBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        reason: String
    },
    isRescheduled:{
        status:{
            type:Boolean,
            default:false
        },
        rescheduledSession:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Session',
        }
    },
    zoomLink:{
        type: String
    },
    acceptanceStatus:{
        type:Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});

export default mongoose.model('Session', sessionSchema);