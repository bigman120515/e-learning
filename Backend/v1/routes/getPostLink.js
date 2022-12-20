import { getOnePost } from "../controllers/getPostlink.js";
import auth from "../middleware/auth.js";

import express from 'express';
const router = express.Router();

router.get('/postlink/:postId', auth, getOnePost);

export default router;