/**
 * Section 5: Triage & Vital Signs Management
 * Base URLs: /api/patients/:id/vitals, /api/vitals/:vitalId
 * Owner: Okorie Peter Chinecherem (#5)
 */
import express from 'express';
import * as vitalsController from '../controllers/vitals-controller.js';
// import { authenticate } from '../middlewares/auth-middleware.js';
// import { authorizeRoles } from '../middlewares/role-middleware.js';

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

export { patientVitalsRouter, vitalRouter };
