import ApiError from "../middleware/apiError.js";

class MasterSkillValidation {
    insert(skill) {
        if (!skill)
            throw ApiError.badRequest('Skill details are required');
        
        if (!skill.skillName)
            throw ApiError.badRequest('Skill name is required');

        return true;
    }

    update(skill) {
        this.insert(skill);

        if (!skill._id)
            throw ApiError.badRequest('Skill id is requried');
        
        return true;
    }

    delete(userPerformer, id) {
        if (!userPerformer)
            throw ApiError.badRequest('Requested by user is required');
            
        if (!id)
            throw ApiError.badRequest('Skill id is required');
        
        return true;
    }
}

export default new MasterSkillValidation();