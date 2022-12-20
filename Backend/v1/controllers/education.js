import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import user from "../models/User.js";
import UserEducation from "../models/UserEducation.js";
import NudgeBlockUtils from "../Utils/NudgeBlockUtils.js";

export const getUserEducation = async (req, res) => {
    const userData = req.user;
    try {
        const fetchedUser = await user.findOne({_id:userData._id, isDeleted: false})
        .populate('userEducation');

        const result = fetchedUser.userEducation

        Response.success(res, "Educations found", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const postUserEducation = async (req, res, next) => {
    const userData = req.user;

    try {
        const data = req.body;
        
        const newEducation = new UserEducation({
            user: userData._id,
            collegeName: data.collegeName,
            degreeName: data.degreeName,
            fieldOfStudy: data.fieldOfStudy,
            startYear: data.startYear,
            endYear: data.endYear,
            present: data.present,
            description: data.description,
        });
        userData.userEducation.push(newEducation);
        if (data.present) {
            userData.set({
                currentJobTitle: data.fieldOfStudy,
                currentCompany: data.collegeName,
            })
        }
        /* userData.set({
            completedStep: `${userData.completedStep = 3 ? userData.completedStep + 1 : userData.completedStep}`,
        }) */
        await userData.save();
        await newEducation.save();

        //Update Completed Steps
        await NudgeBlockUtils.UpdateUserSteps(userData._id);

        const result =  newEducation;
        Response.success(res, "New education added successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const updateUserEducation = async (req, res) => {
    const data = req.body;
    const id = req.params.id;

    if(!id)
        throw ApiError.badRequest("User experience id is required");

    if (!data) 
        throw ApiError.badRequest("Educatoin details are required");
    try{
    //const certification = await UserCertification.findOneAndUpdate({_id:certId}, {$set: data});
    const education = await UserEducation.findOne({_id:id, isDeleted: false});
    if(!education)
        throw ApiError.notFound("User education not found");
    
    education.collegeName=data.collegeName;
    education.degreeName=data.degreeName;
    education.fieldOfStudy=data.fieldOfStudy;
    education.startYear=data.startYear;
    education.endYear=data.endYear;
    education.present=data.present;
    education.description=data.description;
    
    await education.save();
    const result = education;


    Response.success(res, "education updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
        return Response.error(res, err);
        return Response.error(res, ApiError.internal(err));
    }
}

export const deleteUserEducation = async (req, res) => {
    let educationId = req.params.id;
    const userData=req.user;

    if(!educationId)
        throw ApiError.badRequest("User education id is required");

    try {
        let fetchedusereducation = await UserEducation.findOneAndUpdate({_id: educationId, isDeleted: false}, 
            { $set: {isDeleted: true}},{new:true});
    
        if(!fetchedusereducation)
            throw ApiError.notFound("User education not found");

        userData.userEducation.pull({_id: educationId});
        await userData.save();
        const result = fetchedusereducation

        Response.success(res, "User education deleted successfully!", result);
        
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};