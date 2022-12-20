import ApiError from "../middleware/apiError.js";
import user from "../models/User.js";
import Post from "../models/Post.js";
import Response from "../middleware/response.js";
import { upload } from '../middleware/postPicture.js';
import dotenv from 'dotenv';
dotenv.config();


export const getphotos = async (req, res, next) => {
    //let id = req.params.linkedinId;
    const userPerformer = req.user;
    if (!userPerformer) return next(ApiError.notAuthorized("Unable to fetch user, please login"));
    try {

        const fetchedUser = await user.findOne({ _id: userPerformer._id }).populate('posts').lean();
        const { posts } = fetchedUser;

        let postsArr = [];


        const baseURL = process.env.BASE_URL;

        for (let post of posts) {
            if (!post.isDeleted && post.photo.length!=0) {
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
                    }
                    for(let video of post.video){
                        if(video){
                            video=baseURL+video;
                            updatedVideos.push(video)

                        }
                    }
                    post.photo=updatedPhotos;
                    post.video=updatedVideos;
                postsArr.push(post);
            }
        }

       
        const result =postsArr


        Response.success(res, "Photos found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const getvideos = async (req, res, next) => {
    //let id = req.params.linkedinId;
    const userPerformer = req.user;
    if (!userPerformer) return next(ApiError.notAuthorized("Unable to fetch user, please login"));
    try {

        const fetchedUser = await user.findOne({ _id: userPerformer._id }).populate('posts').lean();
        const { posts } = fetchedUser;

        let postsArr = [];


        const baseURL = process.env.BASE_URL;

        for (let post of posts) {
            if (!post.isDeleted && post.video.length!=0) {
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
                    }
                    for(let video of post.video){
                        if(video){
                            video=baseURL+video;
                            updatedVideos.push(video)

                        }
                    }
                    post.photo=updatedPhotos;
                    post.video=updatedVideos;
                postsArr.push(post);
            }
        }

       
        const result =postsArr


        Response.success(res, "User posts found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

// export const getph=async(req,res)=>{
//     const userData=req.user;
//     if(!userData)
//        return ApiError.notAuthorized("unable to fetch User ! please login");
//     try{
//         const fetchedUser = await user.findOne({ _id: userData._id }).populate('posts').lean();
//         const { posts } = fetchedUser;

//         let postsArr = [];


//         const baseURL = process.env.BASE_URL;

//         for (let post of posts) {
//             if (!post.isDeleted) {
//                 //likes
//                 post.totalPhotos = post.photo.length;
//                 const updatedPhotos = [];
//                 const updatedVideos=[];
//                     for(let photo of post.photo) {
//                         if(photo){
//                           photo = baseURL + photo;
//                           postsArr.push(photo)
                    
//                         }
                    
//                     }
//             }
//         }

       
//         const result =postsArr


//         Response.success(res, "User photo found successfully!", result);

//     }catch (err) {
//         if (err instanceof ApiError)
//             return Response.error(res, err);

//         return Response.error(res, ApiError.internal(err));
//     }

// }

