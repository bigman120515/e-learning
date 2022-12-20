import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import LatestNewsService from "../services/latestNews.js";

export const findAll = async (req, res) => {
    try {
        const news = await LatestNewsService.findTop8();        

        Response.success(res, `${news.length} news found`, news);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    } 
}

export const findById = async (req, res) => {
    const newsId = req.params.id;
    try {
        const news = -await LatestNewsService.findById(newsId);        

        Response.success(res, `News found`, news);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const create = async (req, res) => {
    const news = req.body;
    try {

        const createdNews = await LatestNewsService.create(news);        

        Response.success(res, `News successfully created`, createdNews);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const update = async (req, res) => {
    const news = req.body;
    try {

        const updatedNews = await LatestNewsService.update(news);        

        Response.success(res, `News successfully updated`, updatedNews);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const deleteNews = async (req, res) => {
    const userPerformer = req.user;
    const newsId = req.params.id;
    try {

        const deletedNews = await LatestNewsService.delete(userPerformer, newsId);        

        Response.success(res, `News successfully deleted`, deletedNews);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}