import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import { skillsList } from "../models/SkillsList.js";

export const getSkillsList = (req, res, next) => {
    try {
        const listOfSkills = skillsList.sort();

        const skillsArr = [];
        const uniqSkills = (data = []) => {
            const map = {};
            for (let i = 0; i < data.length; i++) {
                if (!map[data[i]]) {
                    map[data[i]] = true;
                    skillsArr.push(data[i]);
                };
            };
            return skillsArr.sort((a, b) => a - b);
        };
        uniqSkills(listOfSkills);

        const result = {
            data: skillsArr,
        };
        Response.success(res, "Skills list found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
        return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));   
    }
}