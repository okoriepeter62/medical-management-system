/**
 * Section 7B: Laboratory Management
 * Base URLs: /api/patients/:id/labs, /api/labs/:labId
 * Owner: Okorie Peter Chinecherem (#7)
 * File storage: Cloudinary
 */

const notImplemented = (name) => async (_req, res) => {
  res.status(501).json({ success: false, message: `Not implemented: ${name}` });
};

// POST /api/patients/:id/labs (Doctor)
exports.requestLab = notImplemented('POST /api/patients/:id/labs');

// GET /api/patients/:id/labs (Doctor, Nurse, Patient Owner)
exports.getPatientLabs = notImplemented('GET /api/patients/:id/labs');

// PATCH /api/labs/:labId (Nurse, Doctor, Lab Technician)
exports.updateLabResult = notImplemented('PATCH /api/labs/:labId');
