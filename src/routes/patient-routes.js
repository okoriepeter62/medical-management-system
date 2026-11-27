/**
 * Section 3: Patient Management
 * Base URL: /api/patients
 * Owner: Okorie Peter Chinecherem (#3)
 */
import express from 'express';
import * as patientController from '../controllers/patient-controller.js';
// import { authenticate } from '../middlewares/auth-middleware.js';
// import { authorizeRoles } from '../middlewares/role-middleware.js';

const router = express.Router();

// POST / - Register a walk-in patient (Nurse, Admin)
router.post('/', patientController.createPatient);

// GET / - Retrieve searchable and paginated patient records (Nurse, Doctor, Admin)
router.get('/', patientController.getPatients);

// GET /:id - Retrieve patient demographics, blood group, and allergies
router.get('/:id', patientController.getPatientById);

// PATCH /:id - Update patient contact info, emergency contact, and allergies
router.patch('/:id', patientController.updatePatient);

// PATCH /:id/status - Update patient hospital workflow status (Nurse, Doctor)
router.patch('/:id/status', patientController.updatePatientStatus);

export default router;
