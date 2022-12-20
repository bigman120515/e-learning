import { postShare } from "../controllers/share.js";

import auth from "../middleware/auth.js";

import express from 'express';
const router = express.Router();

router.post('/share/:postId',auth,postShare);


export default router;