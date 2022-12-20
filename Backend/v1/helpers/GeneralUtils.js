import ApiError from "../middleware/apiError";
import UserService from "../services/user.js";
class GeneralUtils {
    async getProfilePic(userId) {
        if(!userId)
            throw ApiError.badRequest("User id is required");

        const foundUser = await UserService.findById(userId);
        
        if(!foundUser.profilePicture)
            foundUser.profilePicture = "https://learnet.acolabz.com/backend/profile/no-image.png";

        
    }
}

export default new GeneralUtils();