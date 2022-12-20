import ApiError from "../middleware/apiError.js";

class UserValidation {
    insert(user) {
        if (!user)
            throw ApiError.badRequest('User details are required');
        
        if (!user.linkedinid)
            throw ApiError.badRequest('Linkedin id is required');

        return true;
    }

    update(user) {
        this.insert(user);

        if (!user._id)
            throw ApiError.badRequest('User id is requried');
        
        return true;
    }

    delete(requestedByUserId, id) {
        if (!requestedByUserId)
            throw ApiError.badRequest('Requested by user id is required');
        if (!id)
            throw ApiError.badRequest('User id is required');

        if (requestedByUserId !== id)
            throw ApiError.notAuthorized(`You're not authorized to delete this user`);
        
        return true;
    }
}

export default new UserValidation();