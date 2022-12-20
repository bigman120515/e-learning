import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import { colleges } from "../models/Colleges.js";

export const getColleges = (req, res) => {
    try {
        const collegeList = colleges;
        const result = {
            data: collegeList,
        };
        Response.success(res, "User experience updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};