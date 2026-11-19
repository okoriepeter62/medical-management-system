/**
 * Section 5: Triage & Vital Signs Management
 * Base URLs: /api/patients/:id/vitals, /api/vitals/:vitalId
 * Owner: Okorie Peter Chinecherem (#5)
 */
const express = require('express');
const vitalsController = require('../controllers/vitals-controller');
// const { authenticate } = require('../middlewares/auth-middleware');
// const { authorizeRoles } = require('../middlewares/role-middleware');

// Mounted at /api/patients/:id/vitals
const patientVitalsRouter = express.Router({ mergeParams: true });

// POST / - Record patient vital signs (Nurse, Doctor)
patientVitalsRouter.post('/', vitalsController.recordVitals);

// GET / - Retrieve patient's chronological vital signs history (Nurse, Doctor, Patient Owner)
patientVitalsRouter.get('/', vitalsController.getPatientVitals);

// Mounted at /api/vitals
const vitalRouter = express.Router();

// PATCH /:vitalId - Correct an existing vital signs entry (Nurse, Doctor)
vitalRouter.patch('/:vitalId', vitalsController.updateVital);

module.exports = { patientVitalsRouter, vitalRouter };
