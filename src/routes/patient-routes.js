/**
 * Section 3: Patient Management
 * Base URL: /api/patients
 * Owner: Okorie Peter Chinecherem (#3)
 */
const express = require('express');
const patientController = require('../controllers/patient-controller');
// const { authenticate } = require('../middlewares/auth-middleware');
// const { authorizeRoles } = require('../middlewares/role-middleware');

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

module.exports = router;
