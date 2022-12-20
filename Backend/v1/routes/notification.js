import auth from "../middleware/auth.js";
import { getNotifications, postNotifications } from "../controllers/notification.js";

import express from 'express';
const router = express.Router();

router.get('/notification', getNotifications);
router.post('/create-notification', postNotifications);

export default router;