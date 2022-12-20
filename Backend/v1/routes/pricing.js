import { addPricing, deletePricing, getPricing, updatePricing } from '../controllers/pricing.js';

import express from 'express';
const router = express.Router();

router.get('/:linkedinId/pricing', getPricing);
router.post('/:linkedinId/pricing', addPricing);
router.put('/pricing/:pricingId', updatePricing);
router.delete('/pricing/:pricingId', deletePricing);

export default router;