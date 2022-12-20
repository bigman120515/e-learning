import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import user from "../models/User.js";
import UserExperience from "../models/UserExperience.js";
import NudgeBlockUtils from "../Utils/NudgeBlockUtils.js";


export const getUserExperience = async (req, res) => {
    const userData = req.user;
    try {
        let fetchedUser = await user.findOne({_id:userData._id, isDeleted: false})
        .populate('userExperience');

        const result = fetchedUser.userExperience

        Response.success(res, "Experience found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


export const postUserExperience = async (req, res, next) => {
    let userData = req.user;
    try {
        const currentYear = new Date().getFullYear;
        const data = req.body;
        if (!data) 
            throw ApiError.badRequest("Enter experience details");
        const newExperience = new UserExperience({
            user: userData._id,
            jobTitle: data.jobTitle,
            employementType: data.employementType,
            companyName: data.companyName,
            location: data.location,
            startDate: data.startDate,
            endDate: data.endDate,
            present: data.present,
            description: data.description,
        });
        userData.userExperience.push(newExperience);
        if (data.present || data.endDate == currentYear) {
            userData.set({
                currentJobTitle: data.jobTitle,
                currentCompany: data.companyName,
            })
        }
        /* userData.set({
            completedStep: `${userData.completedStep = 3 ? userData.completedStep + 1 : userData.completedStep}`,
        }) */
        await userData.save();
        await newExperience.save();

        //Update Completed Steps
        await NudgeBlockUtils.UpdateUserSteps(userData._id);


        const result = newExperience;
        Response.success(res, "User experience added successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const updateUserExperience = async (req, res, next) => {
    // let userData = req.user;
    const expId=req.params.expId
    let data = req.body;
    if (!data) 
        throw ApiError.badRequest("Enter details");
    try{
    let experience = await UserExperience.findOneAndUpdate({ _id: expId }, {$set: data},{new:true});

    if(!experience)
        throw ApiError.notFound("User experience not found");

    await experience.save();

    const result = experience

    Response.success(res, "Experience updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
        return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const deleteUserExperience = async (req, res) => {
    let expId = req.params.expId;
    let userData=req.user;

    if(!expId)
        throw ApiError.badRequest("User experience id is required");

    try {
        let fetchedUserExperience = await UserExperience.findOneAndUpdate({_id:expId , isDeleted:false}, 
            { $set: {isDeleted: true} });
        
        if(!fetchedUserExperience)
            throw ApiError.notFound("User experience not found");
        
        userData.userExperience.pull({_id: expId});
        await userData.save();

        const result= fetchedUserExperience

        Response.success(res, "User Experience deleted successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};