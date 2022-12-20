import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema({
    linkedinId: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    bannerImage: {
        type: String,
    },
    profilePicture: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    connections: {
        type: Number,
    },
    currentJobTitle: {
        type: String,
    },
    location: {
        type: String,
    },
    joiningDate: {
        type: Date,
    },
    bio: {
        type: String,
    },
    skills: [{
        title: {
            type: String,
        },
        rating: {
            type: Number
        }
    }],
    experience: [{
        jobTitle: {
            type: String,
        },
        startDate: {
            type: String,
        },
        endDate: {
            type: String,
        },
    }],
    certification: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserCertification'
    }],
    language: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserLanguage'
    }],

    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});

export default mongoose.model("UserProfile", userProfileSchema);