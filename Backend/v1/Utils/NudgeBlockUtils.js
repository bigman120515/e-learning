import UserService from "../services/user.js";
import ApiError from "../middleware/apiError.js";
import dotenv from 'dotenv';
dotenv.config();

const stepsDescriptions = [
    "Add your current location and job title.",
    "Add a short description about yourself",
    "Add topics / skills you would like to learn from other professionals.",
    "Add topics / skills you can confidently teach others.",
    "Add your work experience.",
    "Add your Educational Qualifications",
    "Add certifications",
    "Add languages, in which you are comfortable.",
    ""
];

class NudgeBlockUtils {
    GetStepWithDescription(completedSteps) {
        if (!completedSteps)
            throw ApiError.badRequest("Completed steps are required");

        const result = {
            totalSteps: Number(process.env.TOTAL_ONBOARDING_STEPS || 8),
            completedStep: completedSteps,
            description: stepsDescriptions[completedSteps]
        }

        return result;
    }

    async GetCompletedSteps(userId) {
        if (!userId)
            throw ApiError.badRequest('User id is required');

        const foundUser = await UserService.findById(userId);


        //Step 1
        let completedSteps = 1;

        if (!foundUser.currentJobTitle || !foundUser.location)
            return completedSteps;

        //Step 2
        completedSteps=1;

        if (!foundUser.bio)
            return completedSteps;

        //Step 3
        completedSteps=2;

        if (!foundUser.menteeTopics || foundUser.menteeTopics.length <= 0)
            return completedSteps;

        //Step 4
        completedSteps=3;

        if (!foundUser.skills || foundUser.skills.length <= 0)
            return completedSteps;

        //Step 5
        completedSteps=4;

        if (!foundUser.userExperience || foundUser.userExperience.length <= 0)
            return completedSteps;

        //Step 6
        completedSteps=5;

        if (!foundUser.userEducation || foundUser.userEducation.length <= 0)
            return completedSteps;

        //Step 7
        completedSteps=6;

        if (!foundUser.userCertification || foundUser.userCertification.length <= 0)
            return completedSteps;

        //Step 8
        completedSteps=7;

        if (!foundUser.userLanguage || foundUser.userLanguage.length <= 0)
            return completedSteps;

        //All Steps Completed
        completedSteps=8;
        return completedSteps;
    }

    async UpdateUserSteps(userId) {
        if (!userId)
            throw ApiError.badRequest("User id is required");

        let completedSteps = await this.GetCompletedSteps(userId);
        const totalSteps = Number(process.env.TOTAL_ONBOARDING_STEPS || 8);

        if (completedSteps > totalSteps)
            completedSteps = totalSteps;

        const updatedUser = await UserService.udpateCompletedSteps(userId, completedSteps);

        const result = {
            totalSteps: totalSteps,
            completedStep: updatedUser.completedStep,
            description: stepsDescriptions[completedSteps]
        }

        return result;
    }
}

export default new NudgeBlockUtils();