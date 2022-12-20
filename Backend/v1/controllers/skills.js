import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import Skills from "../models/Skills.js";
import MasterskillService from "../services/masterSkill.js";
import NudgeBlockUtils from "../Utils/NudgeBlockUtils.js";


// Get user's skill:
export const getUserSkills = async (req, res) => {
    const userData = req.user
    try {
        // const fetchUser = await user.findOne({ id: id }).populate();
        const { skills } = userData;
        const userSkills = [];
        for await (let skill of skills) {
            const foundSkill = await Skills.findOne({ _id: skill._id });
            userSkills.push(foundSkill);
        }
        const result =userSkills;

        Response.success(res, "Skills found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

// Enter user's new skill:
export const postUserSkill = async (req, res, next) => {
    let userData = req.user;
    let { title, rating } = req.body;
    if (!title || !rating) 
        throw ApiError.badRequest("Enter complete detail");
    try {
        await MasterskillService.create({skillName: title});

        const skill = await Skills.findOne({ user: userData._id, title: title, isDeleted:false });
        if (skill)
            throw ApiError.badRequest("this skill already exists");
        const newSkill = new Skills({
            user: userData._id,
            title: title,
            rating: rating,
        });
        await newSkill.save();
        userData.skills.push(newSkill);
        await userData.save();

        //Update Completed Steps
        await NudgeBlockUtils.UpdateUserSteps(userData._id);

        const result = newSkill;
    

        Response.success(res, "Skill added successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


export const updateUserSkill = async (req, res) => {
    const data = req.body;
    const skillId = req.params.skillId
    if (!data) 
    throw ApiError.badRequest("Enter details");
    try{
    //const certification = await UserCertification.findOneAndUpdate({_id:certId}, {$set: data});
    await MasterskillService.create({skillName: data.title});
    
    const skills = await Skills.findOne({_id:skillId});
    if(!skills)
        throw ApiError.badRequest("Skill not found");
    
    skills.title=data.title;
    skills.rating=data.rating;
    
    await skills.save();
    const result = {
        data: skills,
    }

    Response.success(res, "skills updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
        return Response.error(res, err);
        return Response.error(res, ApiError.internal(err));
    }
}

export const deleteUserSkill = async (req, res) => {
    let skillId = req.params.skillId;
    const userPerformer = req.user;
    try {
        let fetcheduserSkill = await Skills.findOneAndUpdate({_id: skillId, isDeleted:false}, { $set: {isDeleted: true} });
        await fetcheduserSkill.save();
        
        //Removing from User
        userPerformer.skills.pull({_id: skillId});
        await userPerformer.save();

        const result = {
            data: fetcheduserSkill,
        };

        Response.success(res, "skill deleted successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};