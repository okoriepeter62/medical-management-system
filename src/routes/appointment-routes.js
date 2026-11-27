/**
 * Section 4: Appointment Management
 * Base URL: /api/appointments
 * Owner: Oniwon Faith (#4)
 */
import express from 'express';
import * as appointmentController from '../controllers/appointment-controller.js';
// import { authenticate } from '../middlewares/auth-middleware.js';
// import { authorizeRoles } from '../middlewares/role-middleware.js';

const router = express.Router();

// POST / - Book an appointment with a doctor (Patient, Nurse, Admin)
router.post('/', appointmentController.createAppointment);

// GET / - Retrieve appointments with filters (date, doctor, patient, status)
router.get('/', appointmentController.getAppointments);

// GET /:id - Retrieve details of a specific appointment
router.get('/:id', appointmentController.getAppointmentById);

// PATCH /:id/reschedule - Reschedule an existing appointment
router.patch('/:id/reschedule', appointmentController.rescheduleAppointment);

// PATCH /:id/cancel - Cancel an appointment with a cancellation reason
router.patch('/:id/cancel', appointmentController.cancelAppointment);

export default router;
