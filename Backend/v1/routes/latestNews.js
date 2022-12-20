import auth from "../middleware/auth.js";

import express from 'express';
const router = express.Router();

import { 
    findAll,
    findById,
    create,
    update,
    deleteNews
 } 
from "../controllers/latestNews.js";

router.get('/', auth, findAll);
router.get('/:id', auth, findById);
router.post('/', create);
router.put('/', update);
router.delete('/:id', auth, deleteNews);

export default router;