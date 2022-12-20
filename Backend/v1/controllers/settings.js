import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import Settings from "../models/Settings.js";
import user from "../models/User.js";

export const updateSettings = async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    try {
        let fetchedUser = await user.findOne({ linkedinId: id });
        let userSetting = await Settings.findOne({ usser: fetchedUser._id });
        if (!userSetting) {
            let newSetting = new Settings({
                user: fetchedUser._id,
                accountSettings: {
                    feedPreferences: data.accountSettings.feedPreferences || " ",
                    autoPlayVideos: data.accountSettings.autoPlayVideos || false,
                    autoPlayVideos: data.accountSettings.autoPlayVideos || false,
                    show: data.accountSettings.show || false,
                },
                notification: {
                    likeComments: data.notification.likeComments || false,
                    subscriptionBookings: data.notification.subscriptionBookings || false,
                    emailNotification: data.notification.emailNotification || false,
                    pushNotification: data.notification.pushNotification || false,
                },
                privacy: {
                    about: data.privacy.about || false,
                    experience: data.privacy.experience || false,
                    education: data.privacy.education || false,
                    skillsTopics: data.privacy.skillsTopics || false,
                    email: data.privacy.email || false,
                }
            })
            await newSetting.save();
            fetchedUser.set({userSetting: newSetting});
            await fetchedUser.save();
            const result = {
                data: newSetting,
            };
            Response.success(res, "New Settings applied", result);
        };
        
        userSetting.updateOne({ 
            accountSettings: {
                feedPreferences: data.accountSettings.feedPreferences || " ",
                autoPlayVideos: data.accountSettings.autoPlayVideos || false,
                autoPlayVideos: data.accountSettings.autoPlayVideos || false,
                show: data.accountSettings.show || false,
            },
            notification: {
                likeComments: data.notification.likeComments || false,
                subscriptionBookings: data.notification.subscriptionBookings || false,
                emailNotification: data.notification.emailNotification || false,
                pushNotification: data.notification.pushNotification || false,
            },
            privacy: {
                about: data.privacy.about || false,
                experience: data.privacy.experience || false,
                education: data.privacy.education || false,
                skillsTopics: data.privacy.skillsTopics || false,
                email: data.privacy.email || false,
            }
         });
        await userSetting.save();
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};