import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
//import user from "../models/user.js";
import UserCertification from "../models/UserCertification.js";
import NudgeBlockUtils from "../Utils/NudgeBlockUtils.js";

export const getUserCertification = async (req, res) => {
    const userData = req.user;
    try {
        const { userCertification }  = userData;    // fetchedUser --> userData
        const userCertifications = [];
        for await (const certification of userCertification) {
            const foundCertification = await UserCertification.findOne({ _id: certification, isDeleted: false });
            userCertifications.push(foundCertification);
        }
        const result = userCertifications
        

        Response.success(res, "Certifications found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
    
}

export const postUserCertification = async (req, res) => {
    let userData = req.user;
    try {
        const data = req.body;
        if (!data) 
            throw ApiError.badRequest("Enter credentials");
        const newCertification = new UserCertification({
            user: userData._id,
            certificateName: data.certificateName,
            issuingOrganization: data.issuingOrganization,
            issueDate: data.issueDate,
            expiryDate: data.expiryDate,
            credentialId: data.credentialId,
            credentialURL: data.credentialURL,
        });
        userData.userCertification.push(newCertification);
        await userData.save();
        await newCertification.save();

        //Update Completed Steps
        await NudgeBlockUtils.UpdateUserSteps(userData._id);

        const result = newCertification
        Response.success(res, "New certification added successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
export const updateUserCertification = async (req, res) => {
    const data = req.body;
    const certId = req.params.certId
    if (!data) 
    throw ApiError.badRequest("Enter details");
    try{
    //const certification = await UserCertification.findOneAndUpdate({_id:certId}, {$set: data});
    const certification = await UserCertification.findOne({_id:certId, isDeleted: false});
    
    if(!certification)
        throw ApiError.notFound("User certification not found");

    certification.certificateName=data.certificateName;
    certification.issuingOrganization=data.issuingOrganization;
    certification.issueDate=data.issueDate;
    certification.expiryDate=data.expiryDate;
    certification.credentialId=data.credentialId;
    certification.credentialURL=data.credentialURL;
    
    await certification.save();
    const result = certification

    Response.success(res, "certification updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
        return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const deleteUserCertification = async (req, res) => {
    let certId = req.params.certId;
    let userData=req.user;
    try {
        
        let fetcheduserCertification = await UserCertification.findOneAndUpdate({_id:certId , isDeleted:false}, { $set: {isDeleted: true} });
        
        if(!fetcheduserCertification)
            throw ApiError.notFound("User certification is not found");
        
        userData.userCertification.pull({_id:certId});
        await userData.save();

        const result = fetcheduserCertification

        Response.success(res, "Usercertification deleted successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};