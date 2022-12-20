import {
    getUserExperience,
    postUserExperience,
    updateUserExperience,
    deleteUserExperience
} from "../controllers/experience.js";
import auth from "../middleware/auth.js";


import express from 'express';
const router = express.Router();

router.get('/user-experiences/get', auth, getUserExperience);
router.post('/add-experience', auth, postUserExperience);
router.put('/update-experience/:expId', auth, updateUserExperience);
router.delete('/delete-experience/:expId', auth, deleteUserExperience);

export default router;