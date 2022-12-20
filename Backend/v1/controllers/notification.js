import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import Notification from "../models/Notification.js";
import user from "../models/User.js";

export const getNotifications = async (req, res) => {
    let { id } = req.body;
    try {
        let fetchedUser = await user.findOne({ linkedinId: id });
        const notifications = await Notification.find({ user: fetchedUser._id });
        const result = {
            data: notifications,
        }

        Response.success(res, "Notifications found", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const postNotifications = async (req, res) => {
    let data = req.body;
    try {
        let fetchedUser = await user.findOne({ linkedinId: data.id });
        let newNotification = new Notification({
            user: fetchedUser._id,
            title: data.title,
            body: data.body,
            notificationType: data.notificationType,
            link: data.link,
            isRead: data.isRead,
        });
        await newNotification.save();
        const result = {
            data: newNotification,
        }
        Response.success(res, "Notification created", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}