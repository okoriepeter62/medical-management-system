/**
 * Section 6: Medical Records & Consultations
 * Base URLs: /api/patients/:id/records, /api/records/:recordId
 * Owner: Oniwon Faith (#6)
 *
 * SOAP documentation:
 * S - Subjective, O - Objective, A - Assessment, P - Plan
 */

const notImplemented = (name) => async (_req, res) => {
  res.status(501).json({ success: false, message: `Not implemented: ${name}` });
};

// POST /api/patients/:id/records (Doctor)
exports.createRecord = notImplemented('POST /api/patients/:id/records');

// GET /api/patients/:id/records (Doctor, Nurse, Patient Owner)
exports.getPatientRecords = notImplemented('GET /api/patients/:id/records');

// GET /api/records/:recordId (Doctor, Nurse, Patient Owner)
exports.getRecordById = notImplemented('GET /api/records/:recordId');

// PATCH /api/records/:recordId (Doctor)
exports.updateRecord = notImplemented('PATCH /api/records/:recordId');
