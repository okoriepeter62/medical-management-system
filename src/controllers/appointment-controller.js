/**
 * Section 4: Appointment Management
 * Base URL: /api/appointments
 * Owner: Oniwon Faith (#4)
 */

const notImplemented = (name) => async (_req, res) => {
  res.status(501).json({ success: false, message: `Not implemented: ${name}` });
};

// POST /api/appointments (Patient, Nurse, Admin)
export const createAppointment = notImplemented('POST /api/appointments');

// GET /api/appointments (Patient, Staff) - filters: date, doctor, patient, status
export const getAppointments = notImplemented('GET /api/appointments');

// GET /api/appointments/:id (Patient Owner, Nurse, Doctor, Admin)
export const getAppointmentById = notImplemented('GET /api/appointments/:id');

// PATCH /api/appointments/:id/reschedule (Patient Owner, Nurse, Admin)
export const rescheduleAppointment = notImplemented('PATCH /api/appointments/:id/reschedule');

// PATCH /api/appointments/:id/cancel (Patient Owner, Nurse, Doctor, Admin)
export const cancelAppointment = notImplemented('PATCH /api/appointments/:id/cancel');
