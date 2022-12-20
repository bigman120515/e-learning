import ApiError from "../middleware/apiError.js";
import user from "../models/User.js";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";
import Response from "../middleware/response.js";
import dotenv from 'dotenv';
dotenv.config();

export const addFavorites = async (req, res) => {
    
    const userPerformer=req.user
    if (!userPerformer) return ApiError.notAuthorized("Unable to fetch user, please login");
    let fetchedUser = await user.findOne({_id:userPerformer._id});
    if (!fetchedUser) ApiError.notFound("User not found!")
    const postId = req.body;
    //console.log(req.files)
    if (!postId) return next(ApiError.badRequest("Enter details"));
    try {
        const fetchedpost=await Post.findOne(postId)//.populate('user');
        if(!fetchedpost) 
            return ApiError.notFound("Post not found!");
        
        fetchedUser.favorites.push(fetchedpost);
        await fetchedUser.save();
            
        const result = fetchedpost;

        Response.success(res, "Saved to the favorites", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


export const showFavorites = async (req, res, next) => {
    const userData=req.user;
    if (!userData) return next(ApiError.notAuthorized("Unable to fetch user, please login"));
    try {
        
        const fetchedUser = await user.findOne({ _id: userData._id }).populate('favorites').lean();
        const { favorites } = fetchedUser;

        let postsArr = [];


        const baseURL = process.env.BASE_URL;

        for (let post of favorites) {
            if (!post.isDeleted) {
                //likes
                post.totalLikes = post.likes.length;
                post.totalComments=post.comments.length;
                post.totalShare = post.share.length;
                //Photos
                const updatedPhotos = [];
                const updatedVideos=[];
                    for(let photo of post.photo) {
                        if(photo){
                          photo = baseURL + photo;
                          updatedPhotos.push(photo);
                    
                        }
                    for(let video of post.video){
                        if(video){
                            video=baseURL+video;
                            updatedVideos.push(video)

                        }
                    }
    
                    }
                    post.photo=updatedPhotos;
                    post.video=updatedVideos;
                postsArr.push(post);
            }
        }

       
        const result =postsArr


        Response.success(res, "User favorites successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const removeFavorites = async (req, res) => {
    
    const userPerformer=req.user
    if (!userPerformer) return ApiError.notAuthorized("Unable to fetch user, please login");
    let fetchedUser = await user.findOne({_id:userPerformer._id});
    if (!fetchedUser) ApiError.notFound("User not found!")
    const postId = req.params.postId;
    //console.log(req.files)
    if (!postId) return next(ApiError.badRequest("Enter details"));
    try {
        const fetchedpost=await Post.findById(postId)//.populate('user');
        if(!fetchedpost) 
            return ApiError.notFound("Post not found!");
        
        fetchedUser.favorites.pop(fetchedpost);
        await fetchedUser.save();
            
        const result = fetchedpost;

        Response.success(res, "Removed from the favorites", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}