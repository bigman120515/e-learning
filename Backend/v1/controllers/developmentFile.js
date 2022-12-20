import user from "../models/User.js";

export const postMentor = async (req, res) => {
    let { linkedinId: id, topics } = req.body;
    try {
        let fetchedUser = await user.findOne({ linkedinId: id });
        for (let i = 0; i < topics.length; i++){
            fetchedUser.mentorTopics.push(topics[i]);
        }
        await fetchedUser.save();
        res.json({
            status: true,
            message: "mentor updated",
            data: fetchedUser.mentorTopics,
        });
    } catch (err) {
        throw err;
    }
}