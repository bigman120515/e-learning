import { addPaymentMethod, deletePaymentMethod, getPaymentMethod, updatePaymentMethod } from '../controllers/paymentMethod.js';
import auth from "../middleware/auth.js";

import express from 'express';
const router = express.Router();

router.get('/:linkedinId/get-paymentmethod',auth, getPaymentMethod);
router.post('/:linkedinId/add-paymentmethod',auth, addPaymentMethod);
router.put('/update-paymentmethod/:paymentMethodId',auth, updatePaymentMethod);
router.delete('/delete-paymentmethod/:paymentMethodId',auth, deletePaymentMethod);

export default router;