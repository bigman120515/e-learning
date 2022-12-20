import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import user from "../models/User.js";
import NudgeBlockUtils from "../Utils/NudgeBlockUtils.js";

// Update banner picture:
export const updateBannerImage = async (req, res) => {
    let userData = req.user;
    let { bannerImage: bImage } = req.body;
    try {
        userData.set({ bannerImage: bImage });
        await userData.save();
        const result = {
            data: userData.bannerImage,
        }

        Response.success(res, "Banner image updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

// Update profile picture:
export const updateProfilePicture = async (req, res) => {
    let userData = req.user;
    let { profilePicture: pPicture } = req.body;
    try {
        userData.set({ profilePicture: pPicture });
        await userData.save();
        const result = {
            data: userData.profilePicture,
        }

        Response.success(res, "Profile picture updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

// other user profile:
export const getOtherUser = async (req, res) => {
    let id = req.param.linkedinid;
    try {
        let fetchedUser = await user.findOne({ linkedinId: id });
        let { linkedinId, completedStep, notificationSetting, userOTPs, userSetting, userPrivacy, ...otherDetails } = fetchedUser;

        const result = {
            data: otherDetails,
        }

        Response.success(res, "User detail found successfully!", result);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

// Set current job title manually:
export const updateCurrentJobTitle = async (req, res) => {
    let userData = req.user;
    let { title } = req.body;
    try {
        userData.set({ currentJobTitle: title });
        await userData.save();

        //Update Completed Steps
        await NudgeBlockUtils.UpdateUserSteps(userData._id);

        const result = {
            data: userData.currentJobTitle,
        }

        Response.success(res, "Profile picture updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

// Set current company manually:
export const updateBio = async (req, res) => {
    let userData = req.user;
    let { bio } = req.body;
    try {
        userData.set({ bio: bio });
        await userData.save();

        //Update Completed Steps
        await NudgeBlockUtils.UpdateUserSteps(userData._id);

        
        const result = {
            data: userData.bio,
        }

        Response.success(res, "Bio updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};