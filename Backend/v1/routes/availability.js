import { addAvailability, deleteAvailability, getAvailability, } from "../controllers/availability.js";
import auth from "../middleware/auth.js";

import express from 'express';
const router = express.Router();

router.get('/', auth, getAvailability);
router.post('/', auth, addAvailability);
//router.put('/:availId', auth, updateAvailability);
router.delete('/:availId', auth, deleteAvailability);

export default router;