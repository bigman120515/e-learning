import ApiError from '../middleware/apiError.js';
import fetch from 'node-fetch';
import JwtUtils from '../Utils/JwtUtils.js';
import UserJobInfo from '../models/UserJobInfo.js';
import Response from "../middleware/response.js";
import user from "../models/User.js";
import UserExperience from '../models/UserExperience.js';
import UserEducation from '../models/UserEducation.js';
import UserCertification from '../models/UserCertification.js';
import dotenv from 'dotenv';
import Skills from '../models/Skills.js';
dotenv.config();

export const profileLoad = async (req, res, next) => {
    let userData = req.user;
    const id = req.params.id;
    try {
        //let id = userData.linkedinId;
        const fetchedUser = await user.findOne({ _id: id })
            .populate('skills')
            .populate('userExperience')
            .populate('userEducation')
            .populate('userCertification')
            .populate('userLanguage')
            .populate('menteeTopics')
            .populate('mentorTopics');

        const fetchedUserDetails = {
            completedStep: fetchedUser.completedStep,
            fullName: fetchedUser.firstName + " " + fetchedUser.lastName,
            bannerImage: fetchedUser.bannerImage,
            profilePicture: fetchedUser.profilePicture || "https://learnet.acolabz.com/backend/profile/no-image.png",
            linkedinProfileLink: fetchedUser.linkedinProfileLink,
            totalConnections: fetchedUser.totalConnections,
            currentJobTitle: fetchedUser.currentJobTitle,
            location: fetchedUser.location + ",  " + fetchedUser.country,
            joiningDate: fetchedUser.createdAt, // this is learnet joining date now, it could be changed to job joining date if required
            bio: fetchedUser.bio,
            email: fetchedUser.email,
            menteeTopics: fetchedUser.menteeTopics,
            mentorTopics: fetchedUser.mentorTopics,
            skills: fetchedUser.skills,
            experience: fetchedUser.userExperience,
            education: fetchedUser.userEducation,
            certification: fetchedUser.userCertification,
            language: fetchedUser.userLanguage,

        };

        res.json({
            status: true,
            message: "User details found!",
            data: fetchedUserDetails,
        })
    } catch (err) {
        console.log(err);
    }
}

export const connectionSuggetionLst = async (req, res) => {
    let userData = req.user;
    let { skills: topics } = userData;

    console.log(topics[0])
    try {
        let data = [];
        // let fetchedSkills=await user.findOne({_id:userData._id}).populate('skills');
        // let fetchedtitle=fetchedSkills.skills
        
        // console.log(fetchedtitle);
        // console.log(fetchedtitle.length)
        // console.log(fetchedtitle[0])
        

        if (topics.length >= 1) {
            for (let i = 0; i <=topics.length; i++) {
                let fetchedSkills = await Skills.findOne({_id:topics[i]} );
                const fetchedTitle=fetchedSkills.title;
                console.log(fetchedTitle)
                const foundSkills = await Skills.find( {title: fetchedTitle} );                
                if(foundSkills){
                //for (let j = 0; j < foundSkills.length; j++) {
                    //data.push(foundSkills[j]);
                //}
                data.push(foundSkills);
            }
            console.log(data);
            }
        };
        // till now, we have pushed all users (unique & duplicate both) in data array

        // Removing duplicate users from data array:
        let menteesArr = [];
        // const uniqMentees = (data = []) => {
        //     const map = {};
        //     for (let i = 0; i < data.length; i++) {
        //         if (!map[data[i]]) {
        //             map[data[i]] = true;
        //             menteesArr.push(data[i]);
        //         };
        //     };
        //     return menteesArr.sort((a, b) => a - b);
        // };
        //uniqMentees(data);
        
        const uniqueMentees = [...new Set(data)];



        // Removing user's own id from menteesArr:
        for (let mentee of uniqueMentees) {
            if (mentee._id === userData._id) {
                uniqueMentees.splice(mentee, 1)
            }
        };

        // Extracting only few fields from user's details:
        let finalData = menteesArr.map(({ linkedinId, firstName, lastName, _id, profilePicture, currentJobTitle, currentCompany, menteeTopics }) => {
            let output = {
                "id": _id,
                "firstName": firstName,
                "lastName": lastName,
                "linkedinId": linkedinId,
                "profilePicture": (profilePicture === undefined || profilePicture === null) ? process.env.NO_IMAGE_URL : profilePicture,
                "currentJobTitle": currentJobTitle,
                "currentCompany": currentCompany,
                "menteeTopics": menteeTopics,
            }
            console.log(process.env.NO_IMAGE_URL);
            if(!output.profilePicture || output.profilePicture === null)
                output.profilePicture = process.env.NO_IMAGE_URL;
            return output;
        });

        const result = {
            dataLength: menteesArr.length,
            data: finalData
        };

        Response.success(res, "Mentees found", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};

export const connectionSuggetionLsts = async (req, res) => {
    let userData = req.user;
    let { skills: topics } = userData;

    console.log(topics[0])
    try {
        let data = [];
        const foundSkills=[];
         if (topics.length >= 1) {
             for (let i = 0; i <=4; i++) {
                 let fetchedSkills = await Skills.findOne({_id:topics[i]} );
                 const fetchedTitle=fetchedSkills.title;
                 foundSkills.push(fetchedTitle);
                console.log(fetchedTitle)
                const foundUsers = await Skills.find( {title: fetchedTitle,isDeleted:false} )
                .populate('user', {firstName:1, lastName:1, profilePicture:1,currentJobTitle:1,currentCompany:1,location:1})
                .select({title:1})               
                if(foundUsers){
                data.push(foundUsers);
            }
            }
         }
        // await Skills.aggregate([
        //     {"$group" : { "_id": "$name", "count": { "$sum": 1 } } },
        //     {"$match": {"title" :{ "$ne" : null } , "count" : {"$gt": 1} } }, 
        //     {"$sort": {"title" : 1} },
        //     {"$project": {"name" : "$_id", "_id" : 0} }     
        // ]);
        
        console.log(data.length);
        // till now, we have pushed all users (unique & duplicate both) in data array

        // Removing duplicate users from data array:
        let menteesArr = [];
        const uniqMentees = (data = []) => {
            const map = {};
            for (let i = 0; i < data.length; i++) {
                if (!map[data[i]]) {
                    console.log(data[i]);
                    map[data[i]] = true;
                    menteesArr.push(data[i]);
                };
            };
            return menteesArr.sort((a, b) => a - b);
        };
        uniqMentees(data);
        
// const menteesArr = [new Map(data.map((m) => [m.user, m])).values()];
//         console.log(menteesArr)

        // Removing user's own id from menteesArr:
        for (let mentee of menteesArr) {
            if (mentee._id === userData._id) {
                menteesArr.splice(mentee, 1)
            }
        };

        const result = {
            dataLength: menteesArr.length,
            data: menteesArr
        };

        Response.success(res, "Mentees found", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};
