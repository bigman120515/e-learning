import ApiError from "../middleware/apiError.js";

class LatestNewsValidation {
    insert(news) {
        if (!news)
            throw ApiError.badRequest('News details are required');
        
        if (!news.title)
            throw ApiError.badRequest('Title is required');

        return true;
    }

    update(news) {
        this.insert(news);

        if (!news._id)
            throw ApiError.badRequest('Title id is requried');
        
        return true;
    }

    delete(userPerformer, id) {
        if (!userPerformer)
            throw ApiError.badRequest('Requested by user is required');
            
        if (!id)
            throw ApiError.badRequest('Title id is required');
        
        return true;
    }
}

export default new LatestNewsValidation();