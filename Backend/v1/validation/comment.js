import ApiError from "../middleware/apiError.js";

class MasterSkillValidation {
    insert(comment) {
        if (!comment)
            throw ApiError.badRequest('Comment are required');
        
        if (!comment.comment)
            throw ApiError.badRequest('Comment is required');
        
        if (!comment.postId)
            throw ApiError.badRequest('Post id is required');

        return true;
    }

    update(comment) {
        this.insert(comment);

        if (!comment._id)
            throw ApiError.badRequest('Comment id is requried');
        
        return true;
    }

    delete(userPerformer, id) {
        if (!userPerformer)
            throw ApiError.badRequest('Requested by user is required');
            
        if (!id)
            throw ApiError.badRequest('Comment id is required');
        
        return true;
    }
}

export default new MasterSkillValidation();