import user from "../models/User.js";
import Validation from "../validation/user.js";
import ApiError from "../middleware/apiError.js";

class UserService{
    async findAll() {
        const users = await user.find({isDeleted: false})
        .populate();
        return users;
    }

    async findById(id) {
        if (!id)
            throw ApiError.badRequest('User id is required');
        
        const foundUser = await user.findOne({ _id: id, isDeleted: false });
        if (!foundUser)
            throw ApiError.notFound('User not found');

        if(!foundUser.profilePicture)
            foundUser.profilePicture = "https://learnet.acolabz.com/backend/profile/no-image.png";

        return foundUser;
    }

    async create(user) {
        const isValid = Validation.insert(user);
        if (!isValid)
            return;
    }

    async update(user) {
        
    }

    async updateUserBasicProfile(userId, userDetail) {
        if(!userId)
            throw ApiError.badRequest("User id is required");

        if(!userDetail)
            throw ApiError.badRequest("User details is required");

        const updatedUser = await user.findOneAndUpdate({_id: userId, isDeleted: false}, 
            { $set: { 
                firstName : userDetail.firstName,
                lastName: userDetail.lastName,
                currentJobTitle: userDetail.currentJobTitle,
                country: userDetail.country,
                location: userDetail.location
            } }, 
            { new: true });

        if(!updatedUser)
            throw ApiError.badRequest("User not found");

        return updatedUser;
    }

    async udpateCompletedSteps(userId, completedSteps) {
        if(!userId)
            throw ApiError.badRequest("User id is required");

        if(!completedSteps)
            throw ApiError.badRequest("Completed step count is required");

        const updatedUser = await user.findOneAndUpdate({_id: userId, isDeleted: false}, 
            { $set: { completedStep : completedSteps } }, { new: true });

        if(!updatedUser)
            throw ApiError.badRequest("User not found");

        return updatedUser;
    }

    async updateProfilePic(userId, profilePic) {
        if(!userId)
            throw ApiError.badRequest("User id is required");

        const updatedUser = await user.findOneAndUpdate({_id: userId, isDeleted: false}, 
            { $set: { profilePicture : profilePic } }, { new: true });

        if(!updatedUser)
            throw ApiError.badRequest("User not found");

        return updatedUser;
    }

    async deleteUser(id) {
        
    }
}

export default new UserService();