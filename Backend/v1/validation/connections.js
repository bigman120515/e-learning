import ApiError from "../middleware/apiError.js";

class connectionValidation {
    insert(connection) {
        if (!connection)
            throw ApiError.badRequest('Connection details are required');

        return true;
    }

    delete(userPerformer, id) {
        if (!userPerformer)
            throw ApiError.badRequest('Requested by user is required');

        if (!id)
            throw ApiError.badRequest('Connection id is required');

        return true;
    }
}

export default new connectionValidation();