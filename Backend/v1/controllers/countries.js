import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import { countries } from "../models/Country.js"

export const getCountries = (req, res, next) => {
    try {
        const countryList = countries;
        const result = {
            data: countryList,
        };
        Response.success(res, "Country list", result);
    } catch (err) {
        if (err instanceof ApiError)
        return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));   
    }
}