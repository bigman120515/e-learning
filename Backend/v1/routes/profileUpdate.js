import auth from "../middleware/auth.js";
import { updateBannerImage, updateBio, updateCurrentJobTitle, updateProfilePicture } from "../controllers/userProfile.js";
import { deleteUserSkill, getUserSkills, postUserSkill, updateUserSkill } from "../controllers/skills.js";
import { deleteUserExperience, getUserExperience, postUserExperience, updateUserExperience } from "../controllers/experience.js";
import { deleteUserEducation, getUserEducation, postUserEducation, updateUserEducation } from "../controllers/education.js";
import { deleteUserCertification, getUserCertification, postUserCertification, updateUserCertification } from "../controllers/certification.js";
import { deleteLanguage, getLanguages, postLanguage, updateLanguages } from "../controllers/languages.js";
import { updateSettings } from "../controllers/settings.js";

import express from 'express';
const router = express.Router();


const ENDPOINT = 'profile';


// user profile:
// localhost:3000/v1/user/profile/
router
    .put(`/${ENDPOINT}/banner-image`, auth, updateBannerImage) // update banner image
    .put(`/${ENDPOINT}/profile-picture`, auth, updateProfilePicture) // update profile picture
    .put(`/${ENDPOINT}/current-job`, auth, updateCurrentJobTitle) // update job title
    .put(`/${ENDPOINT}/bio`, auth, updateBio) // update bio
    .get(`/${ENDPOINT}/skills`, auth, getUserSkills) // get all skills
    .post(`/${ENDPOINT}/add-skill`, auth, postUserSkill) // add new skill
    .put(`/${ENDPOINT}/update-skill`, auth, updateUserSkill) // update an existing skill
    .delete(`/${ENDPOINT}/delete-skill`, auth, deleteUserSkill) // delete user skill
    .get(`/${ENDPOINT}/experiences`, auth, getUserExperience) // get all experiences
    .post(`/${ENDPOINT}/add-experience`, auth, postUserExperience) // add new experience
    .put(`/${ENDPOINT}/update-experience`, auth, updateUserExperience) // update an existing experience
    .delete(`/${ENDPOINT}/delete-experience`, auth, deleteUserExperience) // delete user experience
    .get(`/${ENDPOINT}/educations`, auth, getUserEducation) // get user's education
    .post(`/${ENDPOINT}/add-education`, auth, postUserEducation)
    .put(`/${ENDPOINT}/update-education`, auth, updateUserEducation)
    .delete(`/${ENDPOINT}/delete-education`, auth, deleteUserEducation)
    .get(`/${ENDPOINT}/certifications`, auth, getUserCertification) // get user's certification
    .post(`/${ENDPOINT}/add-certification`, auth, postUserCertification)
    .put(`/${ENDPOINT}/update-certification`, auth, updateUserCertification)
    .delete(`/${ENDPOINT}/delete-certification`, auth, deleteUserCertification)
    .get(`/${ENDPOINT}/languages`, auth, getLanguages) // get user's languages
    .post(`/${ENDPOINT}/add-language`, auth, postLanguage) // get user's languages
    .put(`/${ENDPOINT}/update-language`, auth, updateLanguages)
    .put(`/${ENDPOINT}/delete-language`, auth, deleteLanguage)
    .put(`/${ENDPOINT}/:id/settings`, updateSettings);

// profile settings:

export default router;