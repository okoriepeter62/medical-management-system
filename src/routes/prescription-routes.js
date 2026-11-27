/**
 * Section 7A: Prescriptions
 * Base URL: /api/patients/:id/prescriptions
 * Owner: Okorie Peter Chinecherem (#7)
 */
import express from 'express';
import * as prescriptionController from '../controllers/prescription-controller.js';
// import { authenticate } from '../middlewares/auth-middleware.js';
// import { authorizeRoles } from '../middlewares/role-middleware.js';

// Mounted at /api/patients/:id/prescriptions
const patientPrescriptionsRouter = express.Router({ mergeParams: true });

// POST / - Create a medication prescription with dosage and duration (Doctor)
patientPrescriptionsRouter.post('/', prescriptionController.createPrescription);

// GET / - Retrieve active and previous prescriptions (Doctor, Nurse, Patient Owner)
patientPrescriptionsRouter.get('/', prescriptionController.getPatientPrescriptions);

export { patientPrescriptionsRouter };
