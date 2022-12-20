import ApiError from "../middleware/apiError.js";
import user from "../models/User.js";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";
import Response from "../middleware/response.js";
import LatestNewsService from "../services/latestNews.js";
import NudgeBlockUtils from "../Utils/NudgeBlockUtils.js";
import dotenv from 'dotenv';
dotenv.config();

export const getPosts = async (req, res) => {
    //let id = req.params.linkedinId;
    const userPerformer = req.user;
    if (!userPerformer)
        return ApiError.notAuthorized("Unable to fetch user, please login");
    try {

        const userProfileDetails = await user.findOne({ isDeleted: false, _id: userPerformer._id })
            .select({
                _id: 1, firstName: 1, lastName: 1, profilePicture: 1, currentCompany: 1, currentCompany: 1,
                totalConnections: 1, totalPost: 1, totalFollower: 1, totalFollowing: 1, completedStep: 1
            })
            .lean();

        if (!userProfileDetails.profilePicture)
            userProfileDetails.profilePicture = "https://learnet.acolabz.com/backend/profile/no-image.png";

        //Nudge block Details
        const nudgeBlockDetails = NudgeBlockUtils.GetStepWithDescription(userProfileDetails.completedStep);
        userProfileDetails.completedStep = undefined;

        let query = [
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "posted_by",
                }
            },
            { $sort: { createdAt: -1 } }
        ];

        query.push({
            $project: {
                _id: 1,
                body: 1,
                photo: 1,
                video: 1,
                docs: 1,
                likes: 1,
                comments: 1,
                share: 1,
                'posted_by._id': 1,
                'posted_by.linkedinId': 1,
                'posted_by.firstName': 1,
                'posted_by.lastName': 1,
                'posted_by.connections._id': 1,
                'posted_by.currentJobTitle': 1,
                'posted_by.currentCompany': 1,
                'posted_by.location': 1,
                'posted_by.profilePicture': 1,
                isDeleted: 1,
                createdAt: 1
            }
        },
            {
                $match: {
                    isDeleted: false,
                    $or: [
                        { 'posted_by._id': userPerformer._id },
                        {
                            'posted_by.connections': {
                                $elemMatch: { _id: userPerformer._id }
                            }
                        }
                    ]

                }
            });
        const baseURL = process.env.BASE_URL;

        const feeds = await Post.aggregate(query);

        const postsArr = [];

        for (let post of feeds) {
            post.isDeleted = undefined;

            //Profile Check
            if (!post.posted_by[0].profilePicture)
                post.posted_by[0].profilePicture = process.env.NO_IMAGE_URL;

            //Photos & Videos
            const updatedPhotos = [];
            const updatedVideos = [];

            if (post.photo) {
                for (let photo of post.photo) {
                    if (photo) {
                        photo = baseURL + photo;
                        updatedPhotos.push(photo);
                    }
                }
            }

            if (post.video) {
                for (let video of post.video) {
                    if (video) {
                        video = baseURL + video;
                        updatedVideos.push(video)

                    }
                }
            }

            post.photo = updatedPhotos;
            post.video = updatedVideos;

            //Comment & Reply
            const projection = {
                _id: 1, post: 1, comment: 1, isDeleted: 1, createdAt: 1, user: 1
            }
            const populateFields = { _id: 1, firstName: 1, lastName: 1, profilePicture: 1, currentJobTitle: 1 }
            const comments = await Comment.find(
                {
                    post: post._id, parentComment: null, isDeleted: false
                },)
                .populate('user', populateFields)
                .select(projection)
                .sort({ createdAt: -1 })
                .lean()

            //Adding Reply
            for await (const comment of comments) {
                const replies = await Comment.find(
                    {
                        post: post._id, parentComment: comment._id, isDeleted: false
                    })
                    .populate('user', populateFields)
                    .select(projection)
                    .sort({ createdAt: -1 })
                    .lean()

                comment.replies = replies;
            }

            post.comments = comments;

            //Total Counts
            post.totalLikes = post.likes.length;
            post.totalComments = post.comments.length;
            post.totalShare = post.share.length;

            //Logged in user like check
            const hasUserLiked = await Post.exists({ _id: post._id, likes: { $elemMatch: { $eq: userPerformer._id } } });
            post.hasUserLiked = hasUserLiked !== null;

            postsArr.push(post);
        }

        const latestNews = await LatestNewsService.findTop8();

        const result = {
            nudgeBlockDetails: nudgeBlockDetails,
            posts: postsArr,
            userProfile: userProfileDetails,
            latestNews: latestNews,
            upcomingSessions: []
        }

        Response.success(res, "", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const getUserPosts = async (req, res, next) => {
    //let id = req.params.linkedinId;
    const userPerformer = req.user;
    if (!userPerformer) return next(ApiError.notAuthorized("Unable to fetch user, please login"));
    try {

        /* const fetchedUser = await user.findOne({ _id: userPerformer._id }).populate('posts').lean();
        const { posts } = fetchedUser;

        const baseURL = process.env.BASE_URL; */

        let query = [
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "posted_by",
                }
            },
            { $sort: { createdAt: -1 } }
        ];

        query.push({
            $project: {
                _id: 1,
                body: 1,
                photo: 1,
                video: 1,
                docs: 1,
                likes: 1,
                comments: 1,
                share: 1,
                'posted_by._id': 1,
                'posted_by.linkedinId': 1,
                'posted_by.firstName': 1,
                'posted_by.lastName': 1,
                'posted_by.currentJobTitle': 1,
                'posted_by.currentCompany': 1,
                'posted_by.location': 1,
                'posted_by.profilePicture': 1,
                isDeleted: 1,
                createdAt: 1
            }
        },
            {
                $match: {
                    isDeleted: false,
                    'posted_by._id': userPerformer._id
                }
            });
        const baseURL = process.env.BASE_URL;

        const feeds = await Post.aggregate(query);

        const postsArr = [];

        for (let post of feeds) {
            post.isDeleted = undefined;

            //Profile Check
            if (!post.posted_by[0].profilePicture)
                post.posted_by[0].profilePicture = process.env.NO_IMAGE_URL;

            //Photos & Videos
            const updatedPhotos = [];
            const updatedVideos = [];

            if (post.photo) {
                for (let photo of post.photo) {
                    if (photo) {
                        photo = baseURL + photo;
                        updatedPhotos.push(photo);

                    }
                }
            }

            if (post.video) {
                for (let video of post.video) {
                    if (video) {
                        video = baseURL + video;
                        updatedVideos.push(video)

                    }
                }
            }

            post.photo = updatedPhotos;
            post.video = updatedVideos;

            //Comment & Reply
            const projection = {
                _id: 1, post: 1, comment: 1, isDeleted: 1, createdAt: 1, user: 1
            }
            const populateFields = { _id: 1, firstName: 1, lastName: 1, profilePicture: 1, currentJobTitle: 1 }
            const comments = await Comment.find(
                {
                    post: post._id, parentComment: null, isDeleted: false
                },)
                .populate('user', populateFields)
                .select(projection)
                .sort({ createdAt: -1 })
                .lean()

            //Adding Reply
            for await (const comment of comments) {
                const replies = await Comment.find(
                    {
                        post: post._id, parentComment: comment._id, isDeleted: false
                    })
                    .populate('user', populateFields)
                    .select(projection)
                    .sort({ createdAt: -1 })
                    .lean()

                comment.replies = replies;
            }

            post.comments = comments;

            //Total Counts
            post.totalLikes = post.likes.length;
            post.totalComments = post.comments.length;
            post.totalShare = post.share.length;

            //Logged in user like check
            const hasUserLiked = await Post.exists({ _id: post._id, likes: { $elemMatch: { $eq: userPerformer._id } } });
            post.hasUserLiked = hasUserLiked !== null;

            postsArr.push(post);
        }

        const result = postsArr

        Response.success(res, "User posts found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const getOnePost = async (req, res) => {
    let postId = req.params.postId;
    try {
        let fetchedPost = await Post.findById(postId).populate('user');

        if (fetchedPost.isDeleted)
            throw ApiError.notFound("Post not found");


        const result = fetchedPost

        Response.success(res, "Post found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const newPost = async (req, res) => {
    //let id = req.params.linkedinId;
    const userPerformer = req.user
    if (!userPerformer) return ApiError.notAuthorized("Unable to fetch user, please login");
    let fetchedUser = await user.findOne({ _id: userPerformer._id });
    if (!fetchedUser) ApiError.notFound("User not found!")
    const data = req.body;

    if (!data) return next(ApiError.badRequest("Enter details"));
    try {
        const newPost = new Post({
            user: fetchedUser._id,
            parentPost: data.parentPost,
            postType: data.postType,
            body: data.body,
            photo: data.photo,
            video: data.video,
            docs: data.docs,
            feeling: data.feeling,
        })
        newPost.save();
        fetchedUser.posts.push(newPost);
        await fetchedUser.save();
        const result = newPost;

        //Updating on latest news
        const firstName = fetchedUser.firstName;
        const lastName = fetchedUser.lastName;
        const fullName = firstName + (lastName !== null ? ` ${lastName}` : '');

        const news = `${fullName} has shared a post`;
        await LatestNewsService.create({ title: news });

        Response.success(res, "New post added successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


export const updatePost = async (req, res, next) => {
    //let id = req.params.linkedinId;
    const userPerformer = req.user;
    const postId = req.params.postId;
    const data = req.body;
    if (!userPerformer) return next(ApiError.notAuthorized("Unable to fetch user, please login"));
    try {
        let feed = await Post.findOneAndUpdate({ _id: postId,user:userPerformer._id, isDeleted: false }, { $set: data }, { new: true });
        await feed.save();
        const result = feed

        Response.success(res, "Feed updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const deletePost = async (req, res, next) => {
    //let id = req.params.linkedinId;
    const userData = req.user;
    const postId = req.params.postId;
    if (!userData)
        return next(ApiError.notAuthorized("Unable to fetch user, please login"));
    const fetchedUser = await user.findOne({ _id: userData._id });
    if (!fetchedUser)
        return ApiError.notFound("User not found");
    try {
        const feed = await Post.findOneAndUpdate({ _id: postId,user:userData._id, isDeleted: false }, { $set: { isDeleted: true } });
        fetchedUser.posts.pop(postId);
        const result = feed

        Response.success(res, "Feed deleted successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


//Extra function 
function isValidUrl(str) {
    const pattern = new RegExp(
        '^([a-zA-Z]+:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
        'i'
    );
    return pattern.test(str);
}