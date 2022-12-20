import ApiError from "../middleware/apiError.js";

class SessionValidation {
    insert(session) {
        if (!session)
            throw ApiError.badRequest('Session details are required');

        if (!session.mentor)
            throw ApiError.badRequest('Mentor is required');

        if (!session.sessionType)
            throw ApiError.badRequest('Session type is required');

        if (!session.skill)
            throw ApiError.badRequest('Skill name is required');

        if (!session.title)
            throw ApiError.badRequest('Title is required');

        if (!session.duration)
            throw ApiError.badRequest('Duration is required');

        if (!session.date)
            throw ApiError.badRequest('Session date is required');

        if (!session.time)
            throw ApiError.badRequest('Session time is required');

        return true;
    }

    update(session) {
        this.insert(session);

        if (!session._id)
            throw ApiError.badRequest('Session id is requried');

        return true;
    }

    delete(userPerformer, id) {
        if (!userPerformer)
            throw ApiError.badRequest('Requested by user is required');

        if (!id)
            throw ApiError.badRequest('Session id is required');

        return true;
    }
}

export default new SessionValidation();