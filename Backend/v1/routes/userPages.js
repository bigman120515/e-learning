import { userProfile, userProfileView, updateUserAddress, updateUserJobTitle } from '../controllers/auth.js';
import { userHome } from '../controllers/userHome.js';
import auth from '../middleware/auth.js';


import express from 'express';
const router = express.Router();

// User Pages
router.get('/:linkedinId/user-home', userHome); // User home page
router.get('/view/profile', auth, userProfileView); // User profile
router.put('/update-profile/:linkedinId', userProfile); // User profile update
router.patch('/update-address', auth, updateUserAddress); // User Address Update
router.patch('/update-jobtitle', auth, updateUserJobTitle); // User Job Title

export default router;