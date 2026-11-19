/**
 * Section 6: Medical Records & Consultations
 * Base URLs: /api/patients/:id/records, /api/records/:recordId
 * Owner: Oniwon Faith (#6)
 */
const express = require('express');
const recordController = require('../controllers/record-controller');
// const { authenticate } = require('../middlewares/auth-middleware');
// const { authorizeRoles } = require('../middlewares/role-middleware');

// Mounted at /api/patients/:id/records
const patientRecordsRouter = express.Router({ mergeParams: true });

// POST / - Create a consultation record with SOAP notes (Doctor)
patientRecordsRouter.post('/', recordController.createRecord);

// GET / - Retrieve a patient's medical history and consultation records
patientRecordsRouter.get('/', recordController.getPatientRecords);

// Mounted at /api/records
const recordRouter = express.Router();

// GET /:recordId - Retrieve details of a specific medical record
recordRouter.get('/:recordId', recordController.getRecordById);

// PATCH /:recordId - Update consultation notes or add follow-up remarks (Doctor)
recordRouter.patch('/:recordId', recordController.updateRecord);

module.exports = { patientRecordsRouter, recordRouter };
