// THis file is to be deleted, don't see here

import {
    deleteUserCertification,
    getUserCertification,
    postUserCertification,
    updateUserCertification
} from "../controllers/certification.js";
import auth from "../middleware/auth.js";


import express from 'express';
const router = express.Router();

// Certifications:
router.get('/', auth, getUserCertification);
router.post('/', auth, postUserCertification);
router.put('/update/:certId', auth, updateUserCertification);
router.delete('/delete/:certId', auth, deleteUserCertification);

export default router;