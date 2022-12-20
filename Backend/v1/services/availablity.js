import Availability from "../models/Availability.js";
import Validation from "../validation/availablity.js";
import ApiError from "../middleware/apiError.js";


class AvailabilityService {
    async findAll() {
        const availability = await Availability.find({ isDeleted: false });

        return availability;
    }

    async findById(id) {
        if (!id)
            throw ApiError.badRequest('availablity id is required');

        const foundavilablity = await Availability.findOne({ _id: id, isDeleted: false });
        if (!foundavilablity)
            throw ApiError.notFound('avilablity not found');

        return foundavilablity;
    }

    async create(userPerformer, availability) {
        const isValid = Validation.insert(availability);
        if (!isValid)
            return;

        availability.user = userPerformer._id;

        const createdAvailability = await Availability.create(availability);

        const result = {
            _id: createdAvailability._id,
            user: {
                _id: userPerformer.id,
                firstName: userPerformer.firstName,
                lastName: userPerformer.lastName,
            },
            days: createdAvailability.days
        }

        return result;
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

        return foundavilablity;
    }

}

export default new AvailabilityService();