import { response } from "express";
import ApiError from "../middleware/apiError.js"
import Response from "../middleware/response.js";
import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import user from "../models/User.js";
import postLike from "../models/PostLike.js";

export const userPostLike=async (req,res)=>{
    const postId = req.params.postId;
    const data = req.body;
    const current_user=req.user;
    if (!postId) 
    return ApiError.notAuthorized("Unable to fetch post, please login");

    // if(!data) 
    // return next(ApiError.badRequest("Enter details"));

    try{
        const fetchedpost=await Post.findOne({_id:postId});
        if(!fetchedpost) 
            return ApiError.notFound("Post not found!");
        
        
        const like = await postLike.findOne({post:postId, user:current_user._id});
        if(!like){
            const newLike=new postLike({
                post:postId,
                user:current_user._id
            })
            var likeData = await newLike.save()
            
            await Post.updateOne({_id:newLike.post},{$push: {likes:current_user._id}})
            Response.success(res, "Like added successfully!", likeData);
        }
         else{
            const unlikeData=await postLike.deleteOne({user:current_user._id});
             await Post.findByIdAndUpdate({_id:postId},{$pull:{likes:current_user._id}});
                Response.success(res,"Like removed successfully!",unlikeData)  
         }
    
    }catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);
        
        return Response.error(res, ApiError.internal(err));
        }
}

