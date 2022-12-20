import { addReplyComment } from "../controllers/reply.js";

import express from 'express';
const router = express.Router();

router.post('/add-reply/:linkedinId',addReplyComment);


export default router;