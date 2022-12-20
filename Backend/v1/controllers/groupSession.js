import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import user from "../models/User.js";
import GroupSession from "../models/GroupSession.js";
//import { userMenteeTopics } from "./auth.js";

export const createGroupSession=async(req,res,next)=>{
    const userData=req.user;
    const data = req.body;
    if (!data) return ApiError.badRequest("Enter complete detail");
    try{
        const newGroupSession=new GroupSession({
            user:userData._id,
            title:data.title,
            description:data.description,
            topic:data.topic,
            language:data.language,
            duration:data.duration
        });
        await newGroupSession.save();
        const result=newGroupSession;
        Response.success(res, "Group Session created successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
export const getEnroll = async (req, res, next) => {
    const userData = req.user;
    const  groupSessionId = req.params.groupSessionId;
    try {
        const groupSession = await GroupSession.findOne({_id:groupSessionId});
        if (!groupSession)
        //  return ApiError.alreadyExists("This skill already exists");
        return res.status(400).json({msg:"GroupSession not found"})
        const enroll =await GroupSession.findOne({enroll:userData._id, user:userData._id});
        if(enroll)
           return res.status(400).json({msg:"already enrolled"});
        else{
            const newEnroll=new GroupSession({
                user:userData._id,
                enroll:userData._id,

                
            })
            var enerollData=await newEnroll.save()
            
            await GroupSession.updateOne({_id:newEnroll.enroll},{$push: {enroll:userData._id}})
            Response.success(res, "Enrolled successfully!", enerollData);
        }
    
    }catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);
        
        return Response.error(res, ApiError.internal(err));
        }
}