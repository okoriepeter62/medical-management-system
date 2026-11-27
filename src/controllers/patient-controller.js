/**
 * Section 3: Patient Management
 * Base URL: /api/patients
 * Owner: Okorie Peter Chinecherem (#3)
 */

const notImplemented = (name) => async (_req, res) => {
  res.status(501).json({ success: false, message: `Not implemented: ${name}` });
};

// POST /api/patients (Nurse, Admin) - Register a walk-in patient
export const createPatient = notImplemented('POST /api/patients');

// GET /api/patients (Nurse, Doctor, Admin) - Searchable and paginated patient records
export const getPatients = notImplemented('GET /api/patients');

// GET /api/patients/:id (Nurse, Doctor, Admin, Patient Owner)
export const getPatientById = notImplemented('GET /api/patients/:id');

// PATCH /api/patients/:id (Nurse, Doctor, Admin, Patient Owner)
export const updatePatient = notImplemented('PATCH /api/patients/:id');

// PATCH /api/patients/:id/status (Nurse, Doctor)
// Statuses: Waiting, In Triage, With Doctor, Admitted, Discharged
export const updatePatientStatus = notImplemented('PATCH /api/patients/:id/status');
