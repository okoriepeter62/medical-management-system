/**
 * Section 7A: Prescriptions
 * Base URL: /api/patients/:id/prescriptions
 * Owner: Okorie Peter Chinecherem (#7)
 */

const notImplemented = (name) => async (_req, res) => {
  res.status(501).json({ success: false, message: `Not implemented: ${name}` });
};

// POST /api/patients/:id/prescriptions (Doctor)
export const createPrescription = notImplemented('POST /api/patients/:id/prescriptions');

// GET /api/patients/:id/prescriptions (Doctor, Nurse, Patient Owner)
export const getPatientPrescriptions = notImplemented('GET /api/patients/:id/prescriptions');
