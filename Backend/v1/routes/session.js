import { findAll, findAllByType, findAllByTypeAndMentee, findAllByTypeAndMentor, 
    findAllUpcomingByTypeAndMentee, findAllUpcomingByTypeAndMentor, findById, 
    create, update, deleteSession,findByDateMentee, findByDateMentor,addMentee,removeMentee} from "../controllers/session.js";

import auth from '../middleware/auth.js';

import express from 'express';
const router = express.Router();

//  router.get('/session/all', getAllSessions);
//router.post('/:linkedinId/book-session', bookNewSession);

//get particular user's all sessions (completed & due both):
//router.get('/:user_id/session',auth, userSession);
router.get('/get/learning',auth, findByDateMentee)
router.get('/get/mentoring',auth, findByDateMentor) 

router.get('/', auth, findAll);
router.get('/mentor', auth, findAllByTypeAndMentor);
router.get('/mentee', auth, findAllByTypeAndMentee);
router.get('/mentor-upcoming', auth, findAllUpcomingByTypeAndMentor);
router.get('/mentee-upcoming', auth, findAllUpcomingByTypeAndMentee);
router.get('/:id', auth, findById);
router.post('/', auth, create);
router.put('/', auth, update);
router.post('/mentee', auth, addMentee);
router.delete('/remove/:sessionId',auth,removeMentee);
router.delete('/', auth, deleteSession);

export default router;