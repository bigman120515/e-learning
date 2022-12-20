import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import MasterSkillService from "../services/masterSkill.js";

export const findAll = async (req, res) => {
    try {

        const foundSkills = await MasterSkillService.findAll();        

        Response.success(res, `${foundSkills.length} skill(s) found`, foundSkills);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
    
}

export const create = async (req, res) => {
    const userPerformer = req.user;
    const skill = req.body;
    try {

        const createdSkill = await MasterSkillService.create(skill);        

        Response.success(res, `Skill successfully updated`, createdSkill);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
    
}

export const deleteSkill = async (req, res) => {
    const userPerformer = req.user;
    const skillId = req.params.id;
    try {

        const deletedSkill = await MasterSkillService.delete(userPerformer, skillId);        

        Response.success(res, `Skill successfully deleted`, deletedSkill);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
    
}