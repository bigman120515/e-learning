import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import Availability from "../models/Availability.js";
import AvailablityService from "../services/availablity.js";
import Validation from "../validation/availablity.js";


export const addAvailability = async (req, res) => {
    const userPerformer = req.user;
    const availability =req.body;
    /* const { days, timings,session_time } = req.body;
    const isValid = Validation.insert(req.body);
    if (!isValid)
        return; */
    try {
        const createdAvailability = await AvailablityService.create(userPerformer, availability);

        return Response.success(res, "Availability successfully created", createdAvailability);


        /*const fetchedUser = await user.findOne({ _id: userPerformer._id });
        if (!fetchedUser)
            return next(ApiError.notFound("User does not exists!"));

        await fetchedUser.updateOne({ sessionTime: session_time });

        const savedDays = [];
        const savedTimings = [];

        for await (const day of days) {
            const foundavilablity=await Availability.findOne({user:userPerformer._id,day:day,isDeleted:false});
            if(!foundavilablity){

            for await (const timing of timings) {
                const creatableTiming = new Timing({
                    //availability: savedAvailability._id,
                    startTime: timing.start_time,
                    endTime: timing.end_time,
                })
                const savedTiming = await creatableTiming.save();
                savedTimings.push({
                    _id: savedTiming._id,
                    startTime:savedTiming.startTime,
                    endTime:savedTiming.endTime
                });
            } 

            const newAvailability = new Availability({
                user: userPerformer._id,
                day: day,
                timings : savedTimings
            });
            const savedAvailability = await newAvailability.save();
            savedDays.push({
                day : savedAvailability.day,
                timings: savedTimings
            });
        }
        }
        if(savedDays.length>0){
        const result = {
            sessionTime : fetchedUser.sessionTime,
            days: savedDays
          }
          Response.success(res, "New availability added successfully!", result);
        }
        else
          return Response.error(res,ApiError.badRequest("Availablity already exists for these days"))*/
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

// export const updateAvailability = async (req, res) => {
//     let availId = req.params.availId;
//     let data = req.body;
//     const userPerformer=req.user;
//     try {
//         await Timing.findOneAndUpdate({availability:availId,isDeleted:false},{$set:{startTime:data.start_time,endTime:data.end_time}})
//         let availability = await Availability.findOneAndUpdate({_id:availId,user:userPerformer._id,isDeleted:false}, { $set: data },{new:true});
//         if(!availability)
          
//         await availability.save();
//         const result =  availability
        
//         Response.success(res, "Availability updated successfully!", result);
//     } catch (err) {
//         if (err instanceof ApiError)
//             return Response.error(res, err);

//         return Response.error(res, ApiError.internal(err));
//     }
// }

export const getAvailability = async (req, res) => {
    let userPerformer = req.user;
    try {
        const fetchedAvailability = await Availability.find({ user: userPerformer._id, isDeleted: false })
        .populate('timings', {_id:1, startTime:1, endTime:1})
        .select({_id:1, day:1, timings:1})
        
       return Response.success(res, "Availability found successfully!", fetchedAvailability);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const deleteAvailability = async (req, res) => {
    const availId = req.params.availId;
    const userPerformer=req.user;
    const isValid = Validation.delete(userPerformer, availId);
        if (!isValid)
            return;
    try {
        const availability = await Availability.findOneAndUpdate({_id:availId,user:userPerformer._id,isDeleted:false},
             { $set: { isDeleted: true } },
             {new:true});
        if(!availability)
         return Response.error(res,ApiError.badRequest("Not found"))
        const result={
            day:availability.day,
            timing:availability.timings,
        }
    
        
       return Response.success(res, "Availability deleted successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}