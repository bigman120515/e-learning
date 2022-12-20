import ApiError from "../middleware/apiError.js";
import user from "../models/user.js";
import UserFeed from "../models/UserFeed.js";

export const getFeeds = async (req, res, next) => {
    let id = req.params.linkedinId;
    if (!id) return next(ApiError.notAuthorized("Unable to fetch user, please login"));
    try {
        const feeds = await UserFeed.find();
        res.json({
            success: true,
            message: "Feeds found successfully!",
            data: feeds,
        })
    } catch (err) {
        next(err);
    }
}

export const getUserFeeds = async (req, res, next) => {
    let id = req.params.linkedinId;
    if (!id) return next(ApiError.notAuthorized("Unable to fetch user, please login"));
    try {
        const fetchUser = await user.findOne({ linkedinId: id }).populate();
        const { feeds } = fetchUser;
        const userfeeds = [];
        for await (let feed of feeds) {
            const foundFeeds = await UserFeed.findOne({ _id: feed._id });
            userfeeds.push(foundFeeds);
        }
        res.json({
            success: true,
            message: "User feeds found successfully!",
            data: userfeeds,
        })
    } catch (err) {
        next(err);
    }
}

export const postFeeds = async (req, res, next) => {
    let id = req.params.linkedinId;
    if (!id) return next(ApiError.notAuthorized("Unable to fetch user, please login"));
    try {
        const data = req.body;
        if (!data) return next(ApiError.badRequest("Enter details"));
        const fetchedUser = await user.findOne({ linkedinId: id });
        const newFeed = new UserFeed({
            user: fetchedUser._id,
            body: data.body,
            photo: data.photo,
            file: data.file,
            article: data.article, // this is not finalised yet
        });
        fetchedUser.feeds.push(newFeed);
        await fetchedUser.save();
        await newFeed.save();
        res.json({
            message: "New feed added successfully!",
            status: true,
            data: newFeed,
        })
    } catch (err) {
        next(err);
    }
}

export const updateFeed = async (req, res, next) => {
    let id = req.params.linkedinId;
    let feedId = req.params.feedId;
    if (!id) return next(ApiError.notAuthorized("Unable to fetch user, please login"));
    try {
        let data = req.body;
        let feed = await UserFeed.findOneAndUpdate({ _id: feedId }, { $set: data });
        await feed.save();
        res.json({
            status: true,
            message: "Feed updated successfully",
            data: feed,
        })
    } catch (err) {
        next(err);
    }
}

export const deleteFeed = async (req, res, next) => {
    let id = req.params.linkedinId;
    let feedId = req.params.feedId;
    if (!id) return next(ApiError.notAuthorized("Unable to fetch user, please login"));
    const fetchedUser = await user.findOne({ linkedinId: id });
    if(!fetchedUser) return next(ApiError.notFound("User not found"));
    try {
        const feed = await UserFeed.findOneAndDelete({ _id: feedId });
        fetchedUser.feeds.pop(feedId);
        await fetchedUser.save();
        res.json({
            status: true,
            message: "Feed deleted successfully",
            data: feed,
        })
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);
        
        return Response.error(res, ApiError.internal(err));
    }
}