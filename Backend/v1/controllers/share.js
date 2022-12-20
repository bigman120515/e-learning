import { response } from "express";
import ApiError from "../middleware/apiError.js"
import Response from "../middleware/response.js";
import Post from "../models/Post.js";
import user from "../models/User.js";
import Share from "../models/Share.js";

export const postShare=async (req,res)=>{
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
        
        
        //const share =await Share.findOne({post:postId, user:current_user._id});
        
            const newShare=new Share({
                post:postId,
                user:current_user._id
            })
            var shareData=await newShare.save()
            
            await Post.updateOne({_id:newShare.post},{$push: {share:current_user._id}})
            Response.success(res, "Shared successfully!", shareData);
    }catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);
        
        return Response.error(res, ApiError.internal(err));
        }
}

