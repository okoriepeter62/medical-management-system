/**
 * Section 8: AI Clinical Assistant
 * Base URL: /api/ai
 * Owner: Oniwon Faith #8
 */
const express = require('express');
const aiController = require('../controllers/ai-controller');
// const { authenticate } = require('../middlewares/auth-middleware');
// const { authorizeRoles } = require('../middlewares/role-middleware');

const router = express.Router();

// POST /summarize-history - Generate summaries of anonymized previous consultation notes (Doctor)
router.post('/summarize-history', aiController.summarizeHistory);

// POST /format-soap - Convert rough clinical notes into structured SOAP documentation (Doctor, Nurse)
router.post('/format-soap', aiController.formatSoap);

// POST /simplify-instructions - Convert technical medical instructions into patient-friendly language (Doctor, Nurse)
router.post('/simplify-instructions', aiController.simplifyInstructions);

module.exports = router;
