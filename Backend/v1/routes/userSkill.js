import { getUserSkills,postUserSkill,updateUserSkill,deleteUserSkill } from '../controllers/skills.js';
import auth from "../middleware/auth.js";

import express from 'express';
const router = express.Router();


// Feeds:
router.get('/skills', auth, getUserSkills );
router.post('/add-skills', auth, postUserSkill);
router.put('/update-skill/:skillId', auth, updateUserSkill);
router.delete('/delete-skill/:skillId', auth, deleteUserSkill);

export default router;