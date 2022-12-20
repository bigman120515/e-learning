import { json } from "express";
import ApiError from "../middleware/apiError.js";

export const userHomeSearch = async (req, res, next) => {
    let data = req.body;
    if (!data) return ApiError.badRequest("Enter input");
    try {
        const result = json.toString(data);
        console.log(String(...data));
    } catch (err) {
        console.log(err);
    }
}