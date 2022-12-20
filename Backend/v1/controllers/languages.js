import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import Language from "../models/Language.js";
import user from "../models/User.js";
import NudgeBlockUtils from "../Utils/NudgeBlockUtils.js";

export const getLanguages = async (req, res) => {
    const userData = req.user;
    try {
        const foundLanguages = await Language.find({user: userData._id, isDeleted: false});
        
        const result = {
            data: foundLanguages,
        }
        Response.success(res, "Language found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const postLanguage = async (req, res) => {
    const userData = req.user;
    const data = req.body;
    if (!data.language && !data.proficient) 
        throw ApiError.notFound("Enter language");
    try {
        
        let newLanguage = new Language({
            user: userData._id,
            language: data.language,
            proficient: data.proficient,
        });
        const savedLanguage = await newLanguage.save();
        userData.userLanguage.push(savedLanguage);
        await userData.save();

        //Update Completed Steps
        await NudgeBlockUtils.UpdateUserSteps(userData._id);

        const result = {
            data: savedLanguage,
        }
        Response.success(res, "New language added successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const updateLanguages = async (req, res) => {
    const data = req.body;
    const langId = req.params.langId
    if (!data) 
        throw ApiError.badRequest("Enter details");
    try{
    const language = await Language.findOne({_id:langId, isDeleted: false});

    if(!language)
        throw ApiError.notFound("User language not found");
    
    language.language=data.language;
    language.proficient=data.proficient;
    
    await language.save();
    const result = {
        data: language,
    }

    Response.success(res, "language updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
        return Response.error(res, err);
        return Response.error(res, ApiError.internal(err));
    }
}


export const deleteLanguage = async (req, res) => {
    let langId = req.params.langId;
    let userData=req.user;

    if(!langId)
        throw ApiError.badRequest("Language id is required");

    try {
        let fetchedlanguage = await Language.findByIdAndUpdate({_id:langId,isDeleted:false}, 
            { $set: {isDeleted: true} },{new:true});
        
        if(!fetchedlanguage)
            throw ApiError.notFound("User language not found");

        userData.userLanguage.pull({_id:langId});
        await userData.save();

        const result = fetchedlanguage

        Response.success(res, "Language successfully deleted", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};