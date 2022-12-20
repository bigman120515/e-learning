import Session from "../models/Session.js";
import Validation from "../validation/session.js";
import ApiError from "../middleware/apiError.js";

class SessionService {
    async findAll() {
        const sessions = await Session.find({ isDeleted: false })
            .sort({ date: -1 });

        return sessions; 
    }
    
    async findAllByType(sessionType) {
        if (!sessionType)
            throw ApiError.badRequest('Session type is required');


        const sessions = await Session.find({ sessionType: sessionType, isDeleted: false })
            .sort({ date: -1 });

        return sessions;
    }

    async findAllByTypeAndMentor(sessionType, mentor) {
        if (!sessionType)
            throw ApiError.badRequest('Session type is required');

        if (!mentor)
            throw ApiError.badRequest('Mentor id is required');


        const sessions = await Session.find({ sessionType: sessionType, mentor: mentor, isDeleted: false })
            .sort({ date: -1 });

        return sessions;
    }

    async findAllByTypeAndMentee(sessionType, mentee) {
        if (!sessionType)
            throw ApiError.badRequest('Session type is required');

        if (!mentee)
            throw ApiError.badRequest('Mentee id is required');


        const sessions = await Session.find({ sessionType: sessionType, 'mentee._id': mentee, isDeleted: false })
            .sort({ date: -1 });

        return sessions;
    }

    async findAllUpcomingByTypeAndMentor(sessionType, mentor) {
        if (!sessionType)
            throw ApiError.badRequest('Session type is required');

        if (!mentor)
            throw ApiError.badRequest('Mentor id is required');

        const today = new Date();
        let endDate = new Date();
        endDate.setMonth(endDate.getMonth() + 1);

        const projection = {
            _id:1, 
            mentee:1, 
            mentor:1, 
            sessionType:1, 
            skill:1, 
            bannerImage:1, 
            title:1, 
            duration:1, 
            amount:1, 
            date:1, 
            time:1, 
            isPaid:1, 
            isCompleted:1
        };

        const sessions = await Session.find({
            sessionType: sessionType,
            mentor: mentor,
            date: { '$gte': today, '$lt': endDate },
            isDeleted: false
        })
        .populate('mentor', {_id:1, firstName:1, lastName:1})
        .select(projection)
        .sort({ date: 1 });

        return sessions;
    }

    async findAllUpcomingByTypeAndMentee(sessionType, mentee) {
        if (!sessionType)
            throw ApiError.badRequest('Session type is required');

        if (!mentee)
            throw ApiError.badRequest('Mentee id is required');


        const today = new Date();
        let endDate = new Date();
        endDate.setMonth(endDate.getMonth() + 1);

        const projection = {
            _id:1, 
            mentee:1, 
            mentor:1, 
            sessionType:1, 
            skill:1, 
            bannerImage:1, 
            title:1, 
            duration:1, 
            amount:1, 
            date:1, 
            time:1, 
            isPaid:1, 
            isCompleted:1
        };

        const sessions = await Session.find({
            sessionType: sessionType,
            mentee: mentee,
            date: { '$gte': today, '$lt': endDate },
            isDeleted: false
        })
        .populate('mentee', {_id:1, firstName:1, lastName:1})
        .select(projection)
        .sort({ date: 1 });

        return sessions;
    }

    async findById(id) {
        if (!id)
            throw ApiError.badRequest('Session id is required');

        const foundSession = await Session.findOne({ _id: id, isDeleted: false });
        if (!foundSession)
            throw ApiError.notFound('News not found');

        return foundSession;
    }

    async create(session) {
        const isValid = Validation.insert(session);
        if (!isValid)
            return;

        const createdSession = await Session.create({
            mentor: session.mentor,
            sessionType: session.sessionType,
            skill: session.skill,
            bannerImage: session.bannerImage,
            title: session.title,
            duration: session.duration,
            amount: session.amount,
            date: session.date,
            time: session.time,
            isPaid: session.isPaid
        });

        return createdSession;
    }

    async addMentee(sessionId, menteeId){
        if(!sessionId)
            throw ApiError.badRequest('Session id is required');

        if(!menteeId)
            throw ApiError.badRequest('Mentee id is required');

        const foundSession = await Session.findOneAndUpdate({_id:sessionId, isDeleted: false},
            {$push:{mentee: menteeId}}, {new: true});

        if(!foundSession)
            throw ApiError.notFound('Session not found');

        return foundSession;
    }

    async removeMentee(sessionId, menteeId){
        if(!sessionId)
            throw ApiError.badRequest('Session id is required');

        if(!menteeId)
            throw ApiError.badRequest('Mentee id is required');
            

        const foundSession = await Session.findOneAndUpdate({_id:sessionId,mentee:menteeId, isDeleted: false},
            {$pull:{mentee: menteeId}}, {new: true});

        if(!foundSession)
            throw ApiError.notFound('Session or Mentee not found');

        return foundSession;
    }

    async update(session) {
        const isValid = Validation.update(session);
        if (!isValid)
            return;

        const updatedSession = await Session.findOneAndUpdate(
            {
                isDeleted: false,
                _id: session._id
            },
            {
                $set: session
            },
            {
                new: true
            });

        return updatedSession;
    }

    async delete(userPerformer, id) {
        const isValid = Validation.delete(userPerformer, id);
        if (!isValid)
            return;

        const foundSession = await Session.findOneAndUpdate({ isDeleted: false, _id: id },
            { isDeleted: true }, { new: true });
        if (!foundSession)
            throw ApiError.notFound("Session not found");

        return foundSession;
    }

    async findByDateMentee(menteeId,date){
        if(!menteeId)
           return ApiError.badRequest('mentee id is required');
        if(!date)
           return ApiError.badRequest('date is required');
           const today = new Date();
        // let endDate = new Date();
        // endDate.setMonth(endDate.getMonth() + 1);

        const projection = {
            _id:1, 
            mentee:1, 
            mentor:1, 
            sessionType:1, 
            skill:1, 
            bannerImage:1, 
            title:1, 
            duration:1, 
            amount:1, 
            date:1, 
            time:1, 
            isPaid:1, 
            isCompleted:1
        };

        const sessions = await Session.find({
            mentee: menteeId,
            date: date,
            isDeleted: false
        })
        .populate('mentor', {_id:1, firstName:1, lastName:1})
        .select(projection)
        .sort({ date: 1 });

        return sessions;

    }
    async findByDateMentor(mentorId,date){
        if(!mentorId)
           return ApiError.badRequest('mentor id is required');
        if(!date)
           return ApiError.badRequest('date is required');
           const today = new Date();
        // let endDate = new Date();
        // endDate.setMonth(endDate.getMonth() + 1);

        const projection = {
            _id:1, 
            mentee:1, 
            mentor:1, 
            sessionType:1, 
            skill:1, 
            bannerImage:1, 
            title:1, 
            duration:1, 
            amount:1, 
            date:1, 
            time:1, 
            isPaid:1, 
            isCompleted:1
        };

        const sessions = await Session.find({
            mentor: mentorId,
            date: date,
            isDeleted: false
        })
        .populate('mentor', {_id:1, firstName:1, lastName:1})
        .select(projection)
        .sort({ date: 1 });

        return sessions;
    }
}

export default new SessionService();