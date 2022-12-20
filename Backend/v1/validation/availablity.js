import ApiError from "../middleware/apiError.js";

class availablityValidation {
    insert(availablity) {
        if (!availablity)
            throw ApiError.badRequest('Avilablity details are required');

        if (!availablity.days || availablity.days.length <=0)
            throw ApiError.badRequest('At least one days is required');

        return true;
    }

    update(availablity) {
        this.insert(availablity);

        if (!availablity._id)
            throw ApiError.badRequest('availablity id is requried');

        return true;
    }

    delete(userPerformer, id) {
        if (!userPerformer)
            throw ApiError.badRequest('Requested by user is required');

        if (!id)
            throw ApiError.badRequest('availablity id is required');

        return true;
    }
}

export default new availablityValidation();