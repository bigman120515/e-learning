import {  userPostLike } from "../controllers/like.js";
import auth from "../middleware/auth.js";

import express from 'express';
const router = express.Router();

router.post('/postLike/:postId', auth,userPostLike)
//router.put('/postLike/:postId', auth,userPostlike)


//router.put('/postUnLike/:postId', auth, userPostUnlike);

export default router;