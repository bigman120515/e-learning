import auth from "../middleware/auth.js";

import express from 'express';
const router = express.Router();

import { 
    findAll,
    create,
    deleteSkill
 } 
from "../controllers/masterSkill.js";

router.get('/', findAll);
router.post('/', create);
router.delete('/:id', auth, deleteSkill);

export default router;