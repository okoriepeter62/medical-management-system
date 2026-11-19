/**
 * Section 5: Triage & Vital Signs Management
 * Base URLs: /api/patients/:id/vitals, /api/vitals/:vitalId
 * Owner: Okorie Peter Chinecherem #5
 */

const notImplemented = (name) => async (_req, res) => {
  res.status(501).json({ success: false, message: `Not implemented: ${name}` });
};

// POST /api/patients/:id/vitals (Nurse, Doctor)
exports.recordVitals = notImplemented('POST /api/patients/:id/vitals');

// GET /api/patients/:id/vitals (Nurse, Doctor, Patient Owner)
exports.getPatientVitals = notImplemented('GET /api/patients/:id/vitals');

// PATCH /api/vitals/:vitalId (Nurse, Doctor)
exports.updateVital = notImplemented('PATCH /api/vitals/:vitalId');
