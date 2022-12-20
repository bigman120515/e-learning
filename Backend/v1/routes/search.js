import { filterPost, getSearch, searchBySkillsOrMentor } from "../controllers/search.js";

import express from 'express';
const router = express.Router();

// Search & Search results:
router.get('/search', searchBySkillsOrMentor); // Search results
router.get('/search/posts', filterPost); // Search filtered posts
router.get('/search/skill', searchBySkillsOrMentor);
export default router;