import {profileLoad, connectionSuggetionLsts} from "../controllers/profileLoad.js";
import express  from 'express';
const router=express.Router();
import auth from '../middleware/auth.js';



router.get('/profile/load/:id',auth, profileLoad)
router.get('/get/filter',auth,connectionSuggetionLsts)

export default router;

