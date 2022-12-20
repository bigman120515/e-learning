import Connection from "../models/Connections.js";
import Validation from "../validation/connections.js";
import ApiError from "../middleware/apiError.js";




class AvailabilityService {
    async findAll() {
        const connections = await Connection.find({ isDeleted: false })
            .sort({ date: -1 });

        return connections; 
    }
    
    async findById(id) {
        if (!id)
            throw ApiError.badRequest('connection id is required');

        const foundConnections = await Connection.findOne({ user:id, isDeleted: false });
        if (!foundConnections)
            throw ApiError.notFound('Connections not found');

        return foundConnections;
    }

    async create(connection) {
        const isValid = Validation.insert(connection);
        if (!isValid)
            return;

            const createdSession = await connection.create({
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

        const foundavilablity = await Session.findOneAndUpdate({ isDeleted: false, _id: id },
            { isDeleted: true }, { new: true });
        if (!foundSession)
            throw ApiError.notFound("Availablity not found");

        return foundavilablity ;
    }

}

export default new AvailabilityService();