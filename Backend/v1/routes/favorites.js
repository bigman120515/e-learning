import { addFavorites, showFavorites,removeFavorites } from '../controllers/favorites.js';
import auth from "../middleware/auth.js";

import express from 'express';
const router = express.Router();

router.get('/get/favorites',auth, showFavorites);
router.post('/favorites', auth, addFavorites);
router.delete('/delete/favorites/:postId',auth,removeFavorites );

export default router;