import ApiError from "../middleware/apiError.js"
import Response from "../middleware/response.js";
import Comment from "../models/Comment.js";
import Post from "../models/Post.js";

export const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({isDeleted:false})
            .populate('comment').lean()

        const result = {
            data: comments,
        };

        Response.success(res, "All comments from comment DB found", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};

export const getPostComments = async (req, res) => {
    const postId = req.params.postId;
    if(!postId)
        throw ApiError.badRequest("Post id is required");

    try {
        const comments = await Comment.find({ post: postId, isDeleted: false })
            .populate('comment')
            .populate('parentComment')
            .populate('user');
        const result = {
            data: comments,
        };
        Response.success(res, "Post comments found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const addNewComment = async (req, res) => {
    const userPerformer = req.user;
    const { postId, parentComment, comment } = req.body;

    if(!userPerformer)
        throw ApiError.badRequest("User is required");

    if(!comment)
        throw ApiError.badRequest("Comment is required");
    if(!postId)
        throw ApiError.badRequest("Post id is required");
    
    try {
        //const fetchedUser = await user.findOne({ linkedinId: id });
        const post = await Post.findOne({_id: postId, isDeleted: false});
        if(!post)
            throw ApiError.notFound("Post not found");
        const newComment = new Comment({
            post: postId,
            parentComment: parentComment,
            user: userPerformer._id,
            comment: comment,
        });
        await newComment.save();
        const result =  newComment
        
        Response.success(res, "New comment added successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};

export const deleteComment = async (req, res, next) => {
    const userData=req.user;
    const commentId = req.params.CommentId;
    if (!userData) 
        throw ApiError.notAuthorized("User is required");
    
    try {
        const deletedComment = await Comment.findOneAndUpdate({ _id: commentId }, { $set: { isDeleted: true } });
        Post.comments.pull({_id: commentId});
        const result = deletedComment

        Response.success(res, "Comment deleted successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
