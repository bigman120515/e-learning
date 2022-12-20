import ApiError from "../middleware/apiError.js";
import user from "../models/User.js";
import Post from "../models/Post.js";
import dotenv from 'dotenv';
import UserService from '../services/user.js';
dotenv.config();

export const userHome = async (req, res, next) => {
    let userData = req.user;
    const data = req.body;
    if (!data) return next(ApiError.badRequest("Enter Credentials"));
    try {
        const fetchedUser = await user.findOne({ linkedinId: userData.linkedinId })
            .populate('posts');

            
        /*
            const id = req.params.linkedinId;
            if (!id) return next(ApiError.notFound("Unable to fetch user, please login"));
            async function feedFunc() {
                const { feeds } = fetchedUser;
                const Posts = [];
                for await (let feed of feeds) {
                const foundFeeds = await Post.findOne({ _id: feed._id });
                Posts.push(foundFeeds);
                }
                return Posts;
            }
        */

        const users = await UserService.findAll();
        const resp = {
            profileSection: {
                bannerImage: fetchedUser.bannerImage,
                profilePicture: fetchedUser.profilePicture,
                name: fetchedUser.firstName + fetchedUser.lastName,
                currentJob: fetchedUser.currentJobTitle,
                totalPost: fetchedUser.totalPost,
                totalFollower: fetchedUser.totalFollower,
                totalFollowing: fetchedUser.totalFollowing,
            },
            nudge: {
                totalSteps: process.env.totalSignUpSteps,
                completedSteps: fetchedUser.completedStep,
            },
            trendingSearches: ["AI", "Blockchain", "Python"], // Will change later
            connectWithProfessionals:users,
            posts: fetchedUser.posts,
            latestNews: ["News display here"]
        }
        res.json({
            status: true,
            message: "New skill added!",
            userSkill: resp,
        });
    } catch (err) {
        console.log(err);
    }
}