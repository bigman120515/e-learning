import { createGroupSession,getEnroll } from "../controllers/groupSession.js";
import auth from "../middleware/auth.js";

import express from 'express';
const router = express.Router();

router.post('/groupsession',auth, createGroupSession);
router.post('/getEnroll/:groupSessionId',auth, getEnroll);

export default router;