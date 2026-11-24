/**
 * Section 7B: Laboratory Management
 * Base URLs: /api/patients/:id/labs, /api/labs/:labId
 * Owner: Okorie Peter Chinecherem (#7)
 */
import express from 'express';
import * as labController from '../controllers/lab-controller.js';
// import { authenticate } from '../middlewares/auth-middleware.js';
// import { authorizeRoles } from '../middlewares/role-middleware.js';

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

export { patientLabsRouter, labRouter };
