import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import user from "../models/User.js";
import UserEducation from "../models/UserEducation.js";
import UserExperience from "../models/UserExperience.js";
import Post from "../models/Post.js";
import skill from "../models/Skills.js"

// filter users by email, name, mentorTopics, experience, education
export const getSearch = async (req, res) => {
    let keyword = req.query.keyword;
    try {
        let query = [
            {
                $lookup: {
                    from: "userexperiences",
                    localField: "userExperience",
                    foreignField: "_id",
                    as: "experiences"
                }
            },
            {
                $lookup: {
                    from: "usereducations",
                    localField: "userEducation",
                    foreignField: "_id",
                    as: "education_details"
                }
            },
        ];

        if (keyword && keyword != " ") {
            query.push({
                $match: {
                    $or: [
                        {
                            email: { $regex: keyword }
                        },
                        {
                            mentorTopics: { $regex: keyword }
                        },
                        {
                            'experiences.jobTitle': { $regex: keyword }
                        },
                        {
                            'education_details.degreeName': { $regex: keyword }
                        }
                    ]
                }
            })
        }

        query.push({
            $project: {
                firstName: 1,
                lastName: 1,
                email: 1,
                linkedinId: 1,
                mentorTopics: 1,
                education_details: 1,
                experiences: 1,
            }
        })

        query.push({
            $sort: { firstName: -1 }
        })

        let filterUsers = await user.aggregate(query);

        const result = {
            dataLength: filterUsers.length,
            data: filterUsers,
        }

        Response.success(res, "Users found successfully", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }

}

export const filterPost = async (req, res) => {
    let keyword = req.query.keyword;
    console.log("==============1111==========")
    let query = [
        {
            $lookup: {
                from: "users",
                localField: "user",
                foreignField: "_id",
                as: "posted_by"
            }
        }
    ];

    if (keyword && keyword != " ") {
        query.push({
            $match: {
                $or: [
                    {
                        body: { $regex: keyword }
                    },
                    {
                        "posted_by.firstName": { regex: keyword }
                    },
                    {
                        "posted_by.lastName": { regex: keyword }
                    }
                ]
            }
        })
    }

    query.push({
        $project: {
            'posted_by.firstName': 1,
            'posted_by.lastName': 1,
            'posted_by.email': 1,
            'posted_by.linkedinId': 1,
        }
    })

    let filterPosts = await Post.aggregate(query);
    try {
        const result = {
            dataLength: filterPosts.length,
            data: filterPosts,
        }

        Response.success(res, "Posts found successfully", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const searchBySkillsOrMentor = async (req, res) => {
    let keyword = req.query.keyword;
    // console.log(keyword, '----------------------------0------------------')
    try {
        let query = [
            {
                $lookup: {
                    from: "skills",
                    localField: "skills",
                    foreignField: "_id",
                    as: "skills"
                }
            },
        ];
        // console.log(query, '--------------------query--------------------------')

        if (keyword && keyword != " ") {
            query.push({
                $match: {
                    $or: [
                        {
                            firstName: { $regex: keyword }
                        },
                        {
                            lastName: { $regex: keyword }
                        },
                        {
                            'skills.title': { $regex: keyword }
                        },
                    ]
                }
            })
        }
        // console.log(query, '--------------------query111--------------------------')


        const projections = {
            _id: 1,
            firstName: 1,
            lastName: 1,
            /* linkedinId: 1,
            skills:1 */
            'skills._id': 1,
            'skills.title': 1,
            'skills.rating': 1,
        };

        const match = {
            isDeleted: false,
            '$or': [
                {
                    firstName: { $regex: keyword }
                },
                {
                    lastName: { $regex: keyword }
                },
                {
                    'skills.title': { $regex: keyword }
                },
            ]
        };

        query.push({
            $project: projections
        })

        query.push({
            $sort: { firstName: -1 }
        })

        let filterUsers = await user.aggregate(query);

        // const filterUsers = await user.find(match)
        //     .select({ _id: 1, firstName: 1, lastName: 1, profilePicture: 1, skills: 1 })
        //     .populate('skills', ['_id', 'title', 'rating'], undefined, { isDeleted: false })
        //     .sort({ firstName: 1 })
        console.log(keyword, filterUsers, 'filteruser')

        const result = {
            // dataLength: filterUsers.length,
            Users: filterUsers,
        }

        Response.success(res, "Users found successfully", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const searchBySkillsOrMentors = async (req, res) => {
    let keyword = req.query.keyword;
    try {
        const projection = {
            _id: 1,
            skill: 1,
            title: 1,
            firstName: 1,
            lastName: 1,
            profilePicture: 1,
        };
        const foundUsers = await user.find({
            $match: {
                $or:
                    [
                        {
                            firstName: { $regex: keyword }
                        },
                        {
                            lastName: { $regex: keyword }
                        },
                        {
                            'skills.title': { $regex: keyword }
                        },
                    ],
                isDeleted: false
            }
        })
            .populate('skills', { _id: 1, title: 1, })
            .select(projection)
            .sort({ firstName: -1 });

        const result = {
            // dataLength: filterUsers.length,
            Users: foundUsers,
        }

        Response.success(res, "Users found successfully", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
