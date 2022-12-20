import {  getphotos,getvideos } from "../controllers/photo.js";
import auth from "../middleware/auth.js";

import express from 'express';
const router = express.Router();

router.get('/get/photos', auth,getphotos)
router.get('/get/videos', auth,getvideos)


export default router;