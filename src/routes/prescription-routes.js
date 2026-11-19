/**
 * Section 7A: Prescriptions
 * Base URL: /api/patients/:id/prescriptions
 * Owner: Okorie Peter Chinecherem (#7)
 */
const express = require('express');
const prescriptionController = require('../controllers/prescription-controller');
// const { authenticate } = require('../middlewares/auth-middleware');
// const { authorizeRoles } = require('../middlewares/role-middleware');

// Mounted at /api/patients/:id/prescriptions
const patientPrescriptionsRouter = express.Router({ mergeParams: true });

// POST / - Create a medication prescription with dosage and duration (Doctor)
patientPrescriptionsRouter.post('/', prescriptionController.createPrescription);

// GET / - Retrieve active and previous prescriptions (Doctor, Nurse, Patient Owner)
patientPrescriptionsRouter.get('/', prescriptionController.getPatientPrescriptions);

module.exports = { patientPrescriptionsRouter };
