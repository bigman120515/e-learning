import LatestNews from "../models/LatestNews.js";
import Validation from "../validation/latestNews.js";
import ApiError from "../middleware/apiError.js";

class LatestNewsService {
    async findAll() {
        const news = await LatestNews.find({ isDeleted: false })
            .sort({ createdAt: -1 });

        return news;
    }

    async findTop8() {
        const news = await LatestNews.find({ isDeleted: false })
            .select({ _id: 1, title: 1, createdAt: 1 })
            .sort({ createdAt: -1 })
            .limit(8);

        return news;
    }

    async findById(id) {
        if (!id)
            throw ApiError.badRequest('News id is required');

        const foundNews = await LatestNews.findOne({ _id: id, isDeleted: false });
        if (!foundNews)
            throw ApiError.notFound('News not found');

        return foundNews;
    }

    async create(news) {
        const isValid = Validation.insert(news);
        if (!isValid)
            return;

        const createdNews = await LatestNews.create({
            title: news.title
        });

        return createdNews;
    }

    async update(news) {
        const isValid = Validation.update(news);
        if (!isValid)
            return;

        const updatedNews = await LatestNews.findOneAndUpdate(
            {
                isDeleted: false,
                _id: news._id
            },
            {
                $set: news
            });

        return updatedNews;
    }

    async delete(userPerformer, id) {
        const isValid = Validation.delete(userPerformer, id);
        if (!isValid)
            return;

        const foundNews = await LatestNews.findOne({ isDeleted: false, _id: id });
        if (!foundNews)
            throw ApiError.notFound("News not found");

        foundNews.isDeleted = true;
        await foundNews.save();

        return foundNews;
    }
}

export default new LatestNewsService();