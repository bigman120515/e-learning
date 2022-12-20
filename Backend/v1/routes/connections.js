import { removeConnection,addConnections, showMyConnections,showConnectionsOfUser,myInvitees,sendInvitation,
     acceptInvitation,rejectInvitation, } from '../controllers/connections.js';
import auth from '../middleware/auth.js';

import express from 'express';
const router = express.Router();


//router.get('/connections/get', auth, showConnectionsOfUser);
router.post('/connections', auth, addConnections);
router.delete('/connection/delete/:Id', auth, removeConnection);

router.get('/', auth, showMyConnections);
router.get('/invitations', auth, myInvitees);
router.post('/invitations', auth, sendInvitation);
router.patch('/invitations', auth, acceptInvitation);
router.delete('/invitations/:Id', auth, rejectInvitation);
router.delete('/:Id', auth, removeConnection);

export default router;