/**
 * Section 8: AI Clinical Assistant
 * Base URL: /api/ai
 * Owner: Oniwon Faith #8
 */
import express from 'express';
import * as aiController from '../controllers/ai-controller.js';
// import { authenticate } from '../middlewares/auth-middleware.js';
// import { authorizeRoles } from '../middlewares/role-middleware.js';

const router = express.Router();

// POST /summarize-history - Generate summaries of anonymized previous consultation notes (Doctor)
router.post('/summarize-history', aiController.summarizeHistory);

// POST /format-soap - Convert rough clinical notes into structured SOAP documentation (Doctor, Nurse)
router.post('/format-soap', aiController.formatSoap);

// POST /simplify-instructions - Convert technical medical instructions into patient-friendly language (Doctor, Nurse)
router.post('/simplify-instructions', aiController.simplifyInstructions);

export default router;
