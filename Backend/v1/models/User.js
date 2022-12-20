import mongoose from 'mongoose';
import emailValidator from 'email-validator';

const userSchema = new mongoose.Schema({    
    linkedinId: {
        require: true,
        type: String,
    },
    email: {
        type: String,
        validate: function () {
            return emailValidator.validate(this.email);
        },
    },
    headline:{
        type:String
    },
    bannerImage: {
        type: String,
    },
    bio: {
        type: String,
    },
    completedStep: {
        type: Number,
        default: 1,
    },
    connections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    invitations:[String],
    country: {
        type: String,
    },
    currentJobTitle: {
        type: String,
    },
    currentCompany: {
        type: String,
    },
    firstName: {
        type: String,
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }],
    isVerified: {
        type: Boolean,
        default: false,
    },
    joiningDate: {
        type: Date,
    },
    lastName: {
        type: String,
    },
    linkedinProfileLink: {
        type: String,
    },    
    location: {
        type: String,
    },
    menteeTopics: [String],
    mentorTopics: [String],
    notificationSetting: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NotificationSetting',
    },
    profilePicture: {
        type: String,
    },
    session: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session',
    }],
    skills: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill',
    }],
    state: {
        type: String,
    },
    totalConnections: {
        type: Number,
        default : 0
    },
    totalPost: {
        type: Number,
        default: 0
    },
    totalFollower: {
        type: Number,
        default: 0
    },
    totalFollowing: { 
        type: Number,
        default: 0
    },
    userOTPs: {
        type: String,
    },
    userExperience: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserExperience',
    }],
    userEducation: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserEducation',
    }],
    userCertification: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserCertification',
    }],
    userLanguage: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Language',
    }],
    favorites:[{type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',}],
    userSetting: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserSetting',
    },
    userPrivacy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserPrivacy',
    },
    zipCode: {
        type: Number,
    },
    sessionTime: {
        type:Number,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
    timestamps: true,
});

export default mongoose.model('User', userSchema);