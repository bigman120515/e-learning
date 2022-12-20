import Comment from "../models/Comment";
import Validation from "../validation/comment";
import ApiError from "../middleware/apiError.js";

class MasterSkillService {
    async findAll(userPerformer, postId) {
        const comments = await Comment.find({ isDeleted: false, user: userPerformer._id, post: postId })
            .sort({ createdAt: -1 });

        return comments;
    }

    async findById(id) {
        if (!id)
            throw ApiError.badRequest('Skill id is required');

        const foundSkill = await Comment.findOne({ _id: id });
        if (!foundSkill)
            throw ApiError.notFound('Skill not found');

        return foundSkill;
    }

    async create(skill) {
        const isValid = Validation.insert(skill);
        if (!isValid)
            return;

        const isExists = await this.exists(skill);

        if (isExists) {
            return await this.update(skill);
        }

        const createdSkill = await Comment.create({
            skillName: skill.skillName
        });

        return createdSkill;
    }

    async update(skill) {
        const isValid = Validation.update(skill);
        if (!isValid)
            return;

        const isExists = await this.exists(skill);
        if (!isExists) {
            return await this.create(skill);
        }

        const updatedSkill = await Comment.findOneAndUpdate(
            {
                isDeleted: false,
                _id: skill._id
            },
            {
                $set:
                {
                    skillName: skill.skillName,
                    isActive: true
                }
            });

        return updatedSkill;
    }

    async delete(userPerformer, id) {
        const isValid = Validation.delete(userPerformer, id);
        if (!isValid)
            return;

        const foundSkill = await Comment.findOne({ isDeleted: false, _id: id });
        if (!foundSkill)
            throw ApiError.notFound("Skill not found");

        foundSkill.isDeleted = true;
        await foundSkill.save();

        return foundSkill;
    }


    //Extra functions
    async exists(skill) {
        if (!skill)
            throw ApiError.badRequest("Skill details is required");

        if (!skill.skillName)
            throw ApiError.badRequest("Skill name is required");

        const foundSkill = await Comment.exists({ isDeleted: false, skillName: skill.skillName });

        return foundSkill !== null;
    }
}

export default new MasterSkillService();