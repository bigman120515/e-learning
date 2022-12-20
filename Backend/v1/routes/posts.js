import { deletePost, getOnePost, getPosts, getUserPosts, newPost, updatePost } from '../controllers/posts.js';
import { upload } from '../middleware/postPicture.js';
import auth from "../middleware/auth.js";

import express from 'express';
const router = express.Router();


// Posts:
router.get('/:linkedinId/posts',auth, getPosts); // all users post
router.get('/:linkedinId/user-posts',auth, getUserPosts); // specific user all post
router.get('/:linkedinId/user-posts/:postId',auth, getOnePost); // specific user all post
router.post('/:linkedinId/new-post',auth, upload.single('photo'), newPost); // create new post
router.put('/update-post/:postId',auth, updatePost); // update an existing post
router.delete('/delete-post/:postId',auth, deletePost); // delete a post

export default router;