import mongoose from 'mongoose';

const userCertificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    certificateName: {
        type: String,
        required: true
    },
    issuingOrganization: {
        type: String,
        required: true
    },
    issueDate: {
        type: Date,
        required: true
    },
    expiryDate: {
        type: Date,
    },
    credentialId: {
        type: String,
    },
    credentialURL: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
},
    { timestamps: true }
);

export default mongoose.model('UserCertification', userCertificationSchema);