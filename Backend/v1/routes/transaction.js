import { create, findTotal, update } from "../controllers/transaction.js";

import auth from '../middleware/auth.js';

import express from 'express';
const router = express.Router();

router.get('/transactions',auth ,findTotal);
router.post('/transactions',auth, create);
router.put('/transactions',auth, update);
//router.get('/transaction', getAllSessions);


export default router;