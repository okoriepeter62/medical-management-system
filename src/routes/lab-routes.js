/**
 * Section 7B: Laboratory Management
 * Base URLs: /api/patients/:id/labs, /api/labs/:labId
 * Owner: Okorie Peter Chinecherem (#7)
 */
const express = require('express');
const labController = require('../controllers/lab-controller');
// const { authenticate } = require('../middlewares/auth-middleware');
// const { authorizeRoles } = require('../middlewares/role-middleware');

// Mounted at /api/patients/:id/labs
const patientLabsRouter = express.Router({ mergeParams: true });

// POST / - Request laboratory investigations (Doctor)
patientLabsRouter.post('/', labController.requestLab);

// GET / - Retrieve laboratory requests and results (Doctor, Nurse, Patient Owner)
patientLabsRouter.get('/', labController.getPatientLabs);

// Mounted at /api/labs
const labRouter = express.Router();

// PATCH /:labId - Upload laboratory results and diagnostic files (Nurse, Doctor, Lab Technician)
labRouter.patch('/:labId', labController.updateLabResult);

module.exports = { patientLabsRouter, labRouter };
