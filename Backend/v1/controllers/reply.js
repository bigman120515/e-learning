import ApiError from "../middleware/apiError.js"
import Response from "../middleware/response.js";
import Comment from "../models/Comment.js";
import user from "../models/User.js";
import Post from "../models/Post.js";

export const addReplyComment = async (req, res) => {
    let id = req.params.linkedinId;
    // let postId = req.params.postID;
    let { postId, parentComment, reply } = req.body;
    try {
        // let fetchedPost = await Post.findById(postId);
        let fetchedUser = await user.findOne({ linkedinId: id });
        const newReply = new Comment({
            post: postId,
            parentComment: parentComment,
            user: fetchedUser._id,
            comment: reply,
        })
        await newReply.save();
        const result = newReply

        Response.success(res, "Reply added successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};
export const getReplyComments = async (req, res) => {
    let postId = req.params.postId;
    try {
        let fetchedComments = await Comment.find({ post: postId })
            .populate('comment')
            .populate('parentComment')
            .populate('user');
        const result = {
            data: fetchedComments,
        };
        Response.success(res, "Post comments found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
