import { updateUserEmail, updateUserAddress, userMenteeTopics, userMentorTopics } from "../controllers/auth.js";
import { getColleges } from "../controllers/college.js";
import { addConnections } from "../controllers/connections.js";
import { getCountries } from "../controllers/countries.js";
import { postMentor } from "../controllers/developmentFile.js";
import { postUserEducation } from "../controllers/education.js";
import { postUserExperience } from "../controllers/experience.js";
import { getFilteredMenteeLIst } from "../controllers/menteeList.js";
import { getFilteredMentorLIst } from "../controllers/mentorList.js";
import { getSkillsList } from "../controllers/skillsList.js";
import { sendMail, userVerification } from "../controllers/userVerification.js";
import auth from "../middleware/auth.js";

import express from 'express';
const router = express.Router();

// New user onboarding process:
router.put('/new-user/email', auth, updateUserEmail) // Add email
router.put('/new-user/address', auth, updateUserAddress) // Add address
router.get('/new-user/address/country', auth, getCountries);
router.post('/new-user/job-info', auth, postUserExperience) // Add job info or experience & IT WILL STORE IN EXPERIENCE SECTION
router.get('/college-list', getColleges) // Get college list
router.post('/new-user/college-info', auth, postUserEducation) // Add college info
router.get('/send-mail', auth, sendMail); // New user verification using email otp
router.put('/verification', auth, userVerification); // New user verification using email otp
router.get('/skills-list', getSkillsList ); // Add mentee topics
router.put('/new-user/mentee-topics', auth, userMenteeTopics); // Add mentee topics
router.put('/new-user/mentor-topics', auth, userMentorTopics); // Add mentor topics
router.get('/new-user/mentor-list', auth, getFilteredMentorLIst);
router.get('/new-user/mentee-list', auth, getFilteredMenteeLIst);
router.put('/new-user/add-connections', auth, addConnections); // Add connections

// Only for development:
router.put('/postmentor', postMentor);
export default router;