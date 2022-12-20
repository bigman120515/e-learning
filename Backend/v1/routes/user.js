import { deleteUser, getAllUsers, getOneUser, updateUser, updateBasicProfile } from "../controllers/user.js";
import auth from "../middleware/auth.js";
import { showConnectionsOfUser } from '../controllers/connections.js';

import express from 'express';
const router = express.Router();

// Create new user:
router.get('/users', getAllUsers); // Get all users of Learnet {,auth,}

router.get('/new-user', (req, res) => {
    res.send("<a>Enter your email</a>")
}); // Create new user, this is temporary

router.delete('/delete-user', auth, deleteUser); // Delete a user
router.get('/delete-user', deleteUser); // Delete a user
router.get('/:linkedinId', getOneUser); // Get only one user of Learnet
router.put('/:id/basic', updateBasicProfile); // Update a user
router.put('/:linkedinId', updateUser); // Update a user

router.get('/:id/connections', showConnectionsOfUser);


export default router;