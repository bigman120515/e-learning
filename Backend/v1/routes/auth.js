import express from 'express';
import { connectWithLinkedin } from '../controllers/auth.js';
import { getNotifications, postNotifications } from '../controllers/notification.js';
import { sendMail, userVerification } from '../controllers/userVerification.js';
import auth from '../middleware/auth.js';
import Response from '../middleware/response.js';
import user from '../models/User.js';
import UserEducation from '../models/UserEducation.js';
import UserExperience from '../models/UserExperience.js';

const router = express.Router();

// AccessToken Generate:
router.get('/home', (req, res) => {
    res.send("Welcome to Learnet")
})

router.get('/notification', getNotifications);
router.post('/create-notification', postNotifications);
// Authenticating existing user or create new user (only if user is not registered):
router.post('/connect-linkedin', connectWithLinkedin);

export default router;