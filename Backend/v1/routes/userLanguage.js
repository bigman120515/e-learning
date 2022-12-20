// THis file is to be deleted, don't see here

import {
    getLanguages,
    postLanguage,
    updateLanguages,
    deleteLanguage
} from "../controllers/languages.js";
import auth from "../middleware/auth.js";

import express from 'express';
const router = express.Router();

// Certifications:
router.get('/user-language/get', auth, getLanguages);
router.post('/add-language', auth, postLanguage);
router.put('/update-language/:langId', auth, updateLanguages);
router.delete('/delete-language/:langId', auth, deleteLanguage);

export default router;