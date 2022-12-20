import ApiError from "../middleware/apiError.js";
import user from "../models/User.js";
import Post from "../models/Post.js";
import Response from "../middleware/response.js";

export const getOnePost = async (req, res) => {
    let postId = req.params.postId;
    try {
        let fetchedPost = await Post.findById(postId).populate('Post');

        const result =fetchedPost;

        Response.success(res, "Post found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}