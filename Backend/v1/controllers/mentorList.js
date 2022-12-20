import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import user from "../models/User.js";

// These mentors can give mentorship to the user having menteeTopics similar to the user's mentorsTopic
export const getFilteredMentorLIst = async (req, res) => {
    const loggedInUser = req.user;
    let {menteeTopics: topics} = req.user; // yahan pr topics ki jgh req.user ki menteeTopics aayegi    --->>> let { topics } = req.body;
    // let id = req.params.linkedinId;
    try {
        // let loggedUser = await user.find({ linkedinId: id });
        // let topics = loggedUser[0].menteeTopics;
        let data = [];
        if (topics.length == 0) {
            let fetchedUsers = await user.find({ _id: { $ne: loggedInUser._id } }).limit(8);
            for (let i = 0; i < fetchedUsers.length; i++) {
                data.push(fetchedUsers[i]);
            }
        }

        if (topics.length == 1) {
            let fetchedUsers = await user.find({ _id: { $ne: loggedInUser._id }, mentorTopics: topics[0] }).limit(8);
            for (let i = 0; i < fetchedUsers.length; i++) {
                data.push(fetchedUsers[i]);
            }
        };

        if (topics.length >= 2) {
            for (let i = 0; i < topics.length; i++) {
                let fetchedUsers = await user.find({_id: { $ne: loggedInUser._id }, mentorTopics: topics[i] });
                for (let j = 0; j < fetchedUsers.length; j++) {
                    data.push(fetchedUsers[j]);
                }
                if (i >= 2)
                    break;
            }
        };

        const mentorsArr = [];
        const uniqMentors = (data = []) => {
            const map = {};
            for (let i = 0; i < data.length; i++) {
                if (!map[data[i]]) {
                    map[data[i]] = true;
                    mentorsArr.push(data[i]);
                };
            };
            return mentorsArr.sort((a, b) => a - b);
        };
        uniqMentors(data);

        // Removing user's own id from menteesArr:
        for (let mentor of mentorsArr) {
            if (mentor.linkedinId === req.user.linkedinId) {
                mentorsArr.splice(mentor, 1)
            }
        };

        let finalData = mentorsArr.map(({ linkedinId, firstName, lastName, _id, profilePicture, currentJobTitle, currentCompany, mentorTopics }) => {
            let output = {
                "id": _id,
                "firstName": firstName,
                "lastName": lastName,
                "linkedinId": linkedinId,
                "profilePicture": profilePicture,
                "currentJobTitle": currentJobTitle,
                "currentCompany": currentCompany,
                "mentorTopics": mentorTopics,
            }
            return output;
        });

        const result = {
            dataLength: mentorsArr.length,
            menteeTopics: topics,
            data: finalData
        };

        Response.success(res, "Mentors found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};