import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import user from "../models/User.js";
import UserService from "../services/user.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await user.find({ isDeleted: false });
        Response.success(res, "", users);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const getOneUser = async (req, res, next) => {
    let id = req.params.linkedinId;
    if (id) {
        try {
            let fetchedUser = await user.findOne({ linkedinId: id, isDeleted: false }).populate();
            if (!fetchedUser)
                throw ApiError.notFound('User not found');

            Response.success(res, "User found successfully!", fetchedUser);
        } catch (err) {
            if (err instanceof ApiError)
                return Response.error(res, err);

            return Response.error(res, ApiError.internal(err));
        }
    }
}

export const updateUser = async (req, res, next) => {
    let id = req.params.linkedinId;
    if (!id)
        throw ApiError.badRequest("Linkedin id is required");

    try {
        let data = req.body;
        if (!data)
            throw ApiError.badRequest("Enter credentials");
        const fetchedUser = await user.findOne({ linkedinId: id });
        if (!fetchedUser)
            throw ApiError.notFound("User does not exists!");

        const updatedUser = await fetchedUser.updateOne(data);

        Response.success(res, "User details updated", updatedUser);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const updateBasicProfile = async (req, res, next) => {
    const id = req.params.id;
    if (!id)
        throw ApiError.badRequest("User id is required");

    const userDetails = req.body;
    if (!userDetails)
            throw ApiError.badRequest("User details are required");
    try {
        const updatedUser = await UserService.updateUserBasicProfile(id, userDetails);

        Response.success(res, "User details updated", updatedUser);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


export const updateProfilePic = async (req, res, next) => {
    const userPerformer = req.user;
    const profilePic = req.body.profilePic;
    if (!userPerformer)
        throw ApiError.badRequest("User is required");

    try {
        const updatedUser = await UserService.updateProfilePic(userPerformer._id, profilePic);
        Response.success(res, "User profile updated", updatedUser);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const deleteUser = async (req, res, next) => {
    const email = req.query.email;
    if (email) {
        try {
            const deletedUser = await user.deleteOne({ email: email, isDeleted: false });
            if (!deletedUser)
                throw ApiError.notFound("User does not exists!");

            /* const deletedUser = await user.findOneAndUpdate({ email: email, isDeleted: false },
                { $set: { isDeleted: true } }, { new: true });

            if (!deletedUser)
                throw ApiError.notFound("User not found"); */

            Response.success(res, "User successfully deleted", deletedUser);
        } catch (err) {
            if (err instanceof ApiError)
                return Response.error(res, err);

            return Response.error(res, ApiError.internal(err));
        }
    }
}