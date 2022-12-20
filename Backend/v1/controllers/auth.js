import ApiError from '../middleware/apiError.js';
import JwtUtils from '../Utils/JwtUtils.js';
import Response from "../middleware/response.js";
import user from '../models/User.js';
import NudgeBlockUtils from '../Utils/NudgeBlockUtils.js';

import RestClient from '../helpers/RestClient.js';

export const connectWithLinkedin = async (req, res, next) => {
    try {
        const { code, redirect_url } = req.query;
        const clientId = "77qayykjfarn2r";
        const clientSecret = "eDSTBZ27BT9oAP8X";

        const accessURL = `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirect_url}`;
        const accessTokenResponse = await RestClient.post(accessURL);
        const accessToken = accessTokenResponse.access_token;
        const linkedInProfileResponse = await RestClient.get('https://api.linkedin.com/v2/me', accessToken);
        const emailResponse = await RestClient.get(`https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))`, accessToken);
        const dpResponse = await RestClient.get(`https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))`, accessToken);
        
        // Retrieving data from above variables:
        const profileEmail = emailResponse.elements[0]["handle~"]["emailAddress"];
		let profilePicture = null;
		try {
         profilePicture = dpResponse.profilePicture['displayImage~'].elements[1].identifiers[0].identifier;
		}catch(err){
		}
        // const vanityName = profileUrlJson?.elements[0]?.vanityName;
        // console.log(vanityName)
        let fetchedUser = await user.findOne({ linkedinId: linkedInProfileResponse.id });

        if (!fetchedUser) {
            const newUser = new user({
                linkedinId: linkedInProfileResponse.id,
                email: profileEmail,
                firstName: linkedInProfileResponse.localizedFirstName,
                lastName: linkedInProfileResponse.localizedLastName,
                profilePicture: profilePicture,
                // linkedinProfileLink: `https://www.linkedin.com/in/${vanityName}`,
            });
            fetchedUser = await newUser.save();
        }

        if(!fetchedUser.profilePicture)
            fetchedUser.profilePicture = "https://learnet.acolabz.com/backend/profile/no-image.png";

        //Update Completed Steps
        const nudgeBlockDetails = await NudgeBlockUtils.UpdateUserSteps(fetchedUser._id);

        const token = await JwtUtils.generateToken(fetchedUser._doc);
        const result = {
            token: token,
            data: fetchedUser,
            nudgeBlockDetails: nudgeBlockDetails
        };
        Response.success(res, "User details:", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};

export const updateUserEmail = async (req, res, next) => {
    let userData = req.user;
    let { email } = req.body;
    try {
        if (!email) return ApiError.badRequest("Enter credentials");
        userData.set({
            email: email,
            completedStep: userData.completedStep + 1,
        });
        await userData.save();
        const result = {
            data: userData,
        };

        Response.success(res, "New user email updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError) return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const updateUserAddress = async (req, res, next) => {
    let userData = req.user;
    let { country, zipCode, location } = req.body;
    if (!country || !zipCode || !location) 
        return ApiError.badRequest("Enter Details");
    try {
        userData.set({
            country: country,
            zipCode: zipCode,
            location: location,
            completedStep: userData.completedStep + 1,
        });
        await userData.save();
        const result = {
            data: userData,
        };

        Response.success(res, "New user created successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};

export const updateUserJobTitle = async (req, res, next) => {
    let userData = req.user;
    let { job_title } = req.body;
    if (!job_title) 
        return ApiError.badRequest("Job title required");
    try {
        userData.set({
            currentJobTitle: job_title
        });
        await userData.save();
        const result = {
            data: userData,
        };

        Response.success(res, "New user created successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};

// user profile update:
export const userProfile = async (req, res, next) => {
    let id = req.params.linkedinId;
    console.log(id);
    if (id) {
        try {
            let data = req.body;
            if (!data) return ApiError.badRequest("Enter credentials");
            const fetchedUser = await user.findOneAndUpdate({ linkedinId: id }, { $set: data })
            if (!user) return ApiError.notFound("User not found!");
            await fetchedUser.save();
            res.status(200).json({
                success: true,
                message: "User profile updated successfully!",
                data: fetchedUser,
            });
        } catch (err) {
            if (err instanceof ApiError)
                return Response.error(res, err);

            return Response.error(res, ApiError.internal(err));
        }
    }
};

// user profile view:
export const userProfileView = async (req, res, next) => {
    const userPerformer = req.user;
    try {
        const fetchedUser = await user.findOne({ _id: userPerformer._id, isDeleted: false })
            .populate('skills')
            .populate('userExperience')
            .populate('userEducation')
            .populate('userCertification')
            .populate('userLanguage')
            .populate('menteeTopics')
            .populate('mentorTopics');

        if(!fetchedUser)
            throw ApiError.notFound("User not found");

        const fetchedUserDetails = {
            completedStep: fetchedUser.completedStep,
            fullName: fetchedUser.firstName + " " + fetchedUser.lastName,
            bannerImage: fetchedUser.bannerImage,
            profilePicture: fetchedUser.profilePicture || "https://learnet.acolabz.com/backend/profile/no-image.png",
            linkedinProfileLink: fetchedUser.linkedinProfileLink,
            totalConnections: fetchedUser.totalConnections,
            currentJobTitle: fetchedUser.currentJobTitle,
            location: fetchedUser.location + ",  " + fetchedUser.country,
            joiningDate: fetchedUser.createdAt, // this is learnet joining date now, it could be changed to job joining date if required
            bio: fetchedUser.bio,
            email: fetchedUser.email,
            menteeTopics: fetchedUser.menteeTopics,
            mentorTopics: fetchedUser.mentorTopics,
            skills: fetchedUser.skills,
            experience: fetchedUser.userExperience,
            education: fetchedUser.userEducation,
            certification: fetchedUser.userCertification,
            language: fetchedUser.userLanguage,
        };

        const nudgeBlockDetails = NudgeBlockUtils.GetStepWithDescription(fetchedUserDetails.completedStep);

        res.json({
            status: true,
            message: "User details found!",
            data: fetchedUserDetails,
            nudgeBlockDetails: nudgeBlockDetails
        })
    } catch (err) {
        console.log(err);
    }
}

// Mentee Topics:
export const userMenteeTopics = async (req, res, next) => {
    let { topics } = req.body;
    let userData = req.user;

    if (!topics) 
        throw ApiError.notFound("Enter topics");
    
    try {
        const fetchedUser = await user.findOneAndUpdate({ _id: userData._id }, { $set: { menteeTopics: topics }}, { new: true });

        if(!fetchedUser)
            throw ApiError.notFound("User not found");

        await fetchedUser.save();

        //Update Completed Steps
        await NudgeBlockUtils.UpdateUserSteps(fetchedUser._id);

        
        const result = {
            data: fetchedUser.menteeTopics,
        };
        Response.success(res, "Mentee updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

// Mentor Topics:
export const userMentorTopics = async (req, res) => {
    let { topics } = req.body;
    if (!topics) 
        throw ApiError.notFound("Enter topics");
    const userData = req.user;
    try {
        const fetchedUser = await user.findOneAndUpdate({ linkedinId: userData.linkedinId }, { $set: { mentorTopics: topics } }, {new: true});
    


        await fetchedUser.save();

        //Update Completed Steps
        await NudgeBlockUtils.UpdateUserSteps(fetchedUser._id);
        
        const result = {
            data: fetchedUser,
        };
        Response.success(res, "Mentor updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError) return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}