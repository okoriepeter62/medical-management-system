/**
 * Section 8: AI Clinical Assistant
 * Base URL: /api/ai
 * Owner: Oniwon Faith #8
 * Integration: Groq API
 *
 * IMPORTANT: AI-generated clinical information must be reviewed and approved by
 * qualified medical personnel before being added to official patient records.
 * Patient-identifiable information should not be sent to external AI services
 * without appropriate privacy safeguards.
 */

import asyncHandler from '../utils/async-handler.js';
import * as groqService from '../integrations/groq.service.js';

const ensureBody = (req) => {
  if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
    const err = new Error('Request body must be a JSON object');
    err.statusCode = 400;
    throw err;
  }
};

// POST /api/ai/summarize-history 
export const summarizeHistory = asyncHandler(async (req, res) => {
  ensureBody(req);

  const notes = req.body.notes ?? req.body.history ?? req.body.consultations;
  const patientContext = req.body.patientContext ?? req.body.context;

  if (!notes || (typeof notes === 'string' && !notes.trim()) || (Array.isArray(notes) && notes.length === 0)) {
    return res.status(400).json({
      success: false,
      message: 'notes is required. Provide anonymized consultation notes as a string, array, or object.',
    });
  }

  const result = await groqService.summarizeHistory({
    notes,
    patientContext: typeof patientContext === 'string' ? patientContext : undefined,
    model: req.body.model,
  });

  return res.status(200).json({
    success: true,
    message: 'Consultation history summarized successfully. Review required before clinical use.',
    data: result,
  });
});

// POST /api/ai/format-soap (Doctor, Nurse)
export const formatSoap = asyncHandler(async (req, res) => {
  ensureBody(req);

  const notes = req.body.notes ?? req.body.note ?? req.body.text;
  if (!notes || (typeof notes === 'string' && !notes.trim())) {
    return res.status(400).json({
      success: false,
      message: 'notes is required. Provide rough clinical notes as a non-empty string.',
    });
  }

  const result = await groqService.formatSoap({
    notes,
    model: req.body.model,
  });

  return res.status(200).json({
    success: true,
    message: 'SOAP note formatted successfully. Review required before clinical use.',
    data: result,
  });
});

// POST /api/ai/simplify-instructions (Doctor, Nurse)
export const simplifyInstructions = asyncHandler(async (req, res) => {
  ensureBody(req);

  const instructions = req.body.instructions ?? req.body.text ?? req.body.note;
  if (!instructions || (typeof instructions === 'string' && !instructions.trim())) {
    return res.status(400).json({
      success: false,
      message: 'instructions is required. Provide medical instructions as a non-empty string.',
    });
  }

  const result = await groqService.simplifyInstructions({
    instructions,
    readingLevel: req.body.readingLevel,
    model: req.body.model,
  });

  return res.status(200).json({
    success: true,
    message: 'Instructions simplified successfully. Review required before sharing with patients.',
    data: result,
  });
});
