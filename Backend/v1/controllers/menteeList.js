import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import user from "../models/User.js";
import dotenv from 'dotenv';
dotenv.config();

// These mentees are similar to them who wants to learn same menteeTopics   || These are also for similar kind of users to add them as a friend
export const getFilteredMenteeLIst = async (req, res) => {
    let userData = req.user;
    let { menteeTopics: topics } = userData;
    // let id = req.params.linkedinId;
    try {
        // let loggedUser = await user.find({ linkedinId: id });
        // let { menteeTopics: topics } = loggedUser[0];
        let data = [];
        if (topics.length == 0) {
            let fetchedUsers = await user.find({ _id: { $ne: userData._id } }).limit(8);
            for (let i = 0; i < fetchedUsers.length; i++) {
                data.push(fetchedUsers[i]);
            }
        }

        if (topics.length == 1) {
            let fetchedUsers = await user.find({_id: { $ne: userData._id}, menteeTopics: topics[0] }).limit(8);
            for (let i = 0; i < fetchedUsers.length; i++) {
                data.push(fetchedUsers[i]);
            }
        };

        if (topics.length >= 2) {
            for (let i = 0; i < topics.length; i++) {
                let fetchedUsers = await user.find({ _id: { $ne: userData._id}, menteeTopics: topics[i] });
                for (let j = 0; j < fetchedUsers.length; j++) {
                    data.push(fetchedUsers[j]);
                }
                if (i >= 2)
                    break;
            }
        };
        // till now, we have pushed all users (unique & duplicate both) in data array

        // Removing duplicate users from data array:
        let menteesArr = [];
        const uniqMentees = (data = []) => {
            const map = {};
            for (let i = 0; i < data.length; i++) {
                if (!map[data[i]]) {
                    map[data[i]] = true;
                    menteesArr.push(data[i]);
                };
            };
            return menteesArr.sort((a, b) => a - b);
        };
        uniqMentees(data);


        // Removing user's own id from menteesArr:
        for (let mentee of menteesArr) {
            if (mentee.linkedinId === userData.linkedinId) {
                menteesArr.splice(mentee, 1)
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