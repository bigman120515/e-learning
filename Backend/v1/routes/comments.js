import { addNewComment, getAllComments, getPostComments } from "../controllers/comments.js";
import express from 'express';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/all/comments', auth, getAllComments);
router.get('/getpost-coment/:postId', auth, getPostComments);
router.post('/:linkedinId/post/new-comment', auth, addNewComment);

export default router;