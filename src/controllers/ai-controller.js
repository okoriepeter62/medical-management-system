/**
 * Section 8: AI Clinical Assistant
 * Base URL: /api/ai
 * Owner: Oniwon Faith (#8)
 * Integration: Groq API
 *
 * IMPORTANT: AI-generated clinical information must be reviewed and approved by
 * qualified medical personnel before being added to official patient records.
 * Patient-identifiable information should not be sent to external AI services
 * without appropriate privacy safeguards.
 */

const notImplemented = (name) => async (_req, res) => {
  res.status(501).json({ success: false, message: `Not implemented: ${name}` });
};

// POST /api/ai/summarize-history (Doctor)
exports.summarizeHistory = notImplemented('POST /api/ai/summarize-history');

// POST /api/ai/format-soap (Doctor, Nurse)
exports.formatSoap = notImplemented('POST /api/ai/format-soap');

// POST /api/ai/simplify-instructions (Doctor, Nurse)
exports.simplifyInstructions = notImplemented('POST /api/ai/simplify-instructions');
