import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import SessionService from "../services/session.js";
import Session from "../models/Session.js";

export const findAll = async (req, res) => {
    try {

        const sessions = await SessionService.findAll();

        return Response.success(res, `${sessions.length} session(s) found`, sessions);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const findAllByType = async (req, res) => {
    const sessionType = req.query.type;
    try {
        const sessions = await SessionService.findAllByType(sessionType);

        return Response.success(res, `${sessions.length} session(s) found`, sessions);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const findAllByTypeAndMentor = async (req, res) => {
    const userPerformer = req.user;
    const sessionType = req.query.type;
    try {
        const sessions = await SessionService.findAllByTypeAndMentor(sessionType, userPerformer._id);

        return Response.success(res, `${sessions.length} session(s) found`, sessions);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const findAllByTypeAndMentee = async (req, res) => {
    const userPerformer = req.user;
    const sessionType = req.query.type;
    try {
        const sessions = await SessionService.findAllByTypeAndMentee(sessionType, userPerformer._id);

        return Response.success(res, `${sessions.length} session(s) found`, sessions);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


export const findAllUpcomingByTypeAndMentor = async (req, res) => {
    const userPerformer = req.user;
    const sessionType = req.query.type;
    try {
        const sessions = await SessionService.findAllUpcomingByTypeAndMentor(sessionType, userPerformer._id);

        return Response.success(res, `${sessions.length} session(s) found`, sessions);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


export const findAllUpcomingByTypeAndMentee = async (req, res) => {
    const userPerformer = req.user;
    const sessionType = req.query.type;
    try {
        const sessions = await SessionService.findAllUpcomingByTypeAndMentee(sessionType, userPerformer._id);

        return Response.success(res, `${sessions.length} session(s) found`, sessions);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const findById = async (req, res) => {
    const sessionId = req.params.id;
    try {
        const sessions = await SessionService.findById(sessionId);

        return Response.success(res, `Session found`, sessions);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const create = async (req, res) => {
    const session = req.body;
    try {

        const createdSession = await SessionService.create(session);

        return Response.success(res, `Session successfully added`, createdSession);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }

}

export const update = async (req, res) => {
    const session = req.body;
    try {

        const updatedSession = await SessionService.update(session);

        return Response.success(res, `Session successfully updated`, updatedSession);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }

}

export const addMentee = async (req, res) => {
    const userPerformer = req.user;
    const sessionId = req.body.sessionId;
    try {
        const addedMentee = await SessionService.addMentee(sessionId, userPerformer._id);

        return Response.success(res, `Mentee successfully added`, addedMentee);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const removeMentee = async (req, res) => {
    const userPerformer = req.user;
    const sessionId = req.params.sessionId;
    try {
        const removedMentee = await SessionService.removeMentee(sessionId, userPerformer._id);

        return Response.success(res, `Mentee successfully removed`, removedMentee);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const deleteSession = async (req, res) => {
    const userPerformer = req.user;
    const sessionId = req.params.id;
    try {

        const deletedSession = await SessionService.delete(userPerformer, sessionId);        

        return Response.success(res, `Session successfully deleted`, deletedSession);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const findByDateMentee = async (req, res) => {
    const userData=req.user;
    const filter=req.query.filter;
    
    let fetchedSession={};
    // d.setHours(24,0,0,0); // today midnight
    try {
        if(filter==="Today"){
            fetchedSession=await SessionService.findByDateMentee(
                userData._id, {'$gte': new Date().setHours(0,0,0,0),'$lte': new Date().setHours(24,0,0,0) })
             
        }
        else if(filter==="This week"){
            const startdayOfweek=new Date();
             const days = (startdayOfweek.getDay() + 7 - 1) % 7;
             startdayOfweek.setDate(startdayOfweek.getDate() - days);
             startdayOfweek.setHours(0, 0, 0, 0);
             const endDayOfweek=new Date();
             const day = (endDayOfweek.getDay() + 7 - 1) % 7;
             endDayOfweek.setDate(endDayOfweek.getDate() - day+6);
             endDayOfweek.setHours(0, 0, 0, 0);
             
             fetchedSession=await SessionService.findByDateMentee(userData._id,{'$gte':startdayOfweek,'$lte':endDayOfweek})
        }
        else if(filter==="Upcoming"){
            let endDate=new Date();
            endDate.setDate(endDate.getDate() + 30);
            fetchedSession=await SessionService.findByDateMentee(userData._id, 
                {'$gte':new Date(),'$lte':endDate});
        }
        else {
            let beforeDate=new Date();
            beforeDate.setDate(beforeDate.getDate() - 30);
            fetchedSession=await SessionService.findByDateMentee(userData._id, 
                {'$gte':beforeDate,'$lte':new Date()})
        }
        
        const result = fetchedSession;

        Response.success(res, "Sessions found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError) return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

 export const userSession = async (req, res) => {
    let id = req.params.user_id;
    try {
        let fetchedUser = await user.findOne({ _id: id }).populate('session');
        
        const result = {
            data: fetchedUser.session,
            fullName: fetchedUser.firstName + " " + fetchedUser.lastName,
        };

        Response.success(res, `${fetchedUser.firstName} sessions found successfully!`, result);
    } catch (err) {
        if (err instanceof ApiError) return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
 }   


 export const findByDateMentor = async (req, res) => {
    const userData=req.user;
    const filter=req.query.filter;
    
    let fetchedSession={};
    try {
        if(filter==="Today"){
            fetchedSession=await SessionService.findByDateMentor(userData._id, 
               {'$gte': new Date().setHours(0,0,0,0),'$lte': new Date().setHours(24,0,0,0)})
            
        }
        else if(filter==="This week"){
            const startdayOfweek=new Date();
            const days = (startdayOfweek.getDay() + 7 - 1) % 7;
            startdayOfweek.setDate(startdayOfweek.getDate() - days);
            startdayOfweek.setHours(0, 0, 0, 0);
            const endDayOfweek=new Date();
            const day = (endDayOfweek.getDay() + 7 - 1) % 7;
            endDayOfweek.setDate(endDayOfweek.getDate() - day+6);
            endDayOfweek.setHours(0, 0, 0, 0);
            // console.log(endDayOfweek)
            // console.log(startdayOfweek)
            fetchedSession=await SessionService.findByDateMentor(userData._id, {'$gte':startdayOfweek,'$lte':endDayOfweek})

        }
        
        else if(filter==="Upcoming"){
            let endDate=new Date();
            endDate.setDate(endDate.getDate() + 30);
            //console.log(endDate);
            fetchedSession=await SessionService.findByDateMentor(userData._id, {'$gte':new Date(),'$lte':endDate})
        }
        else {
            let beforeDate=new Date();
            beforeDate.setDate(beforeDate.getDate() - 30);
            //console.log(beforeDate)
            fetchedSession=await SessionService.findByDateMentor(userData._id, {'$gte':beforeDate,'$lte':new Date()})

        }
        
         const result = fetchedSession;

//Response.success(res, `${fetchedUser.firstName} sessions found successfully!`, result);
        Response.success(res, "Sessions found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError) return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const getAllSessions = async (req, res) => {
    try {
        let allSessions = await Session.find();
        const result = {
            data: allSessions,
        };

        Response.success(res, "All sessions found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError) return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }    
}

// export const bookNewSession = async (req, res) => {
//     let id = req.params.linkedinId;
//     let { mentor, skill, duration, amount, date, time,title,sessionType, isPaid } = req.body;
//     try {
//         let fetchedUser = await user.findOne({ linkedinId: id });
//         let fetchedMentor = await user.findById(mentor);
//         let newSession = new Session({
//             mentee: fetchedUser._id,
//             mentor: mentor,
//             skill: skill,
//             title:title,
//             duration: duration,
//             amount: amount,
//             date: date,
//             time: time,
//             isPaid: isPaid,
//         });

//         await newSession.save();
//         fetchedUser.session.push(newSession);
//         fetchedMentor.session.push(newSession);

//         await fetchedUser.save();
//         await fetchedMentor.save();

//         const result = {
//             data: newSession,
//         };

//         Response.success(res, "New session booked successfully!", result);
//     } catch (err) {
//         if (err instanceof ApiError) return Response.error(res, err);

//         return Response.error(res, ApiError.internal(err));
//     }
// }
