import {
    getUserEducation, 
    postUserEducation,
    updateUserEducation,
    deleteUserEducation
} from "../controllers/education.js";
import auth from "../middleware/auth.js";


import express from 'express';
const router = express.Router();

// Education:
router.get('/education/get', auth, getUserEducation);
router.post('/education',  auth, postUserEducation);
router.put('/education/update/:id',auth, updateUserEducation);
router.delete('/education/delete/:id',auth,  deleteUserEducation);

export default router;