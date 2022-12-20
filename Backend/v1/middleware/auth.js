import ApiError from "./apiError.js";
import Response from "./response.js";
import UserService from "../services/user.js";
import JwtUtils from "../Utils/JwtUtils.js";

export default async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token || token === '')
        return Response.error(res, ApiError.badRequest('Token is required'));
    
    try {
        const verifiedUser = await JwtUtils.verifyToken(token);
        if (!verifiedUser)
            return Response.error(res, ApiError.notAuthorized());

        const authorizedUser = await UserService.findById(verifiedUser._id);
        if (!authorizedUser)
            return Response.error(res, ApiError.notAuthorized());
        if(!authorizedUser.isActive)
            return Response.error(res, ApiError.notActive(`You've blocked please contact to admin`));

        req.user = authorizedUser;
        return next();
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, ApiError.notAuthorized());

        return Response.error(res, ApiError.internal(err));
    }
}