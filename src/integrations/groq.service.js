import { getGroqClient, defaultModel } from '../config/groq.js';

const CLINICAL_DISCLAIMER =
  'AI-generated content is for clinical assistance only. It must be reviewed and approved by qualified medical personnel before being added to official patient records.';

const PRIVACY_NOTICE =
  'Do not send patient-identifiable information (names, addresses, phone numbers, IDs, etc.) to external AI services without appropriate privacy safeguards.';

/**
 * Call Groq chat completions and return the assistant text.
 */
const createCompletion = async ({ systemPrompt, userPrompt, temperature = 0.2, model }) => {
  const client = getGroqClient();

  const completion = await client.chat.completions.create({
    model: model || defaultModel,
    temperature,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
  });

  const content = completion?.choices?.[0]?.message?.content?.trim();
  if (!content) {
    const err = new Error('Groq API returned an empty response');
    err.statusCode = 502;
    throw err;
  }

  return {
    content,
    model: completion.model || model || defaultModel,
    usage: completion.usage || null,
  };
};

const normalizeNotesInput = (input) => {
  if (typeof input === 'string') return input.trim();

  if (Array.isArray(input)) {
    return input
      .map((item, index) => {
        if (typeof item === 'string') return `Note ${index + 1}: ${item}`;
        if (item && typeof item === 'object') {
          return `Note ${index + 1}: ${JSON.stringify(item)}`;
        }
        return '';
      })
      .filter(Boolean)
      .join('\n\n')
      .trim();
  }

  if (input && typeof input === 'object') {
    return JSON.stringify(input, null, 2);
  }

  return '';
};

const tryParseJsonObject = (text) => {
  if (typeof text !== 'string') return null;

  const trimmed = text.trim();
  const candidates = [trimmed];
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced?.[1]) candidates.push(fenced[1].trim());

  const firstBrace = trimmed.indexOf('{');
  const lastBrace = trimmed.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    candidates.push(trimmed.slice(firstBrace, lastBrace + 1));
  }

  for (const candidate of candidates) {
    try {
      const parsed = JSON.parse(candidate);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        return parsed;
      }
    } catch (_err) {
      // Ignore parse failures; caller can fall back to raw text.
    }
  }

  return null;
};

/**
 * Summarize anonymized previous consultation notes.
 * @param {{ notes: string|string[]|object, patientContext?: string, model?: string }} params
 */
const summarizeHistory = async ({ notes, patientContext, model }) => {
  const normalizedNotes = normalizeNotesInput(notes);
  if (!normalizedNotes) {
    const err = new Error('notes is required and must be a non-empty string, array, or object');
    err.statusCode = 400;
    throw err;
  }

  const systemPrompt = [
    'You are a clinical documentation assistant for healthcare professionals.',
    'Summarize anonymized consultation notes clearly and accurately.',
    'Do not invent facts. If information is missing, state that it is not documented.',
    'Use concise professional medical language.',
    'Return plain text with short sections when helpful: Overview, Key Findings, Diagnoses/Assessments, Treatments/Medications, Follow-up/Plan, Outstanding Concerns.',
    PRIVACY_NOTICE,
  ].join(' ');

  const userPrompt = [
    patientContext ? `Non-identifying context: ${patientContext}` : null,
    'Anonymized consultation notes:',
    normalizedNotes,
  ]
    .filter(Boolean)
    .join('\n\n');

  const completion = await createCompletion({ systemPrompt, userPrompt, model, temperature: 0.2 });

  return {
    summary: completion.content,
    model: completion.model,
    usage: completion.usage,
    disclaimer: CLINICAL_DISCLAIMER,
    privacyNotice: PRIVACY_NOTICE,
  };
};

/**
 * Convert rough clinical notes into structured SOAP documentation.
 * @param {{ notes: string, model?: string }} params
 */
const formatSoap = async ({ notes, model }) => {
  const normalizedNotes = normalizeNotesInput(notes);
  if (!normalizedNotes) {
    const err = new Error('notes is required and must be a non-empty string');
    err.statusCode = 400;
    throw err;
  }

  const systemPrompt = [
    'You are a clinical documentation assistant helping clinicians format notes.',
    'Convert rough clinical notes into structured SOAP documentation.',
    'Do not invent facts. If a section is not supported by the notes, write "Not documented".',
    'Respond with ONLY valid JSON (no markdown fences) using this exact shape:',
    '{"subjective":"","objective":"","assessment":"","plan":""}.',
    PRIVACY_NOTICE,
  ].join(' ');

  const userPrompt = `Rough clinical notes:\n\n${normalizedNotes}`;
  const completion = await createCompletion({ systemPrompt, userPrompt, model, temperature: 0.1 });

  const parsed = tryParseJsonObject(completion.content);
  const soap = {
    subjective: typeof parsed?.subjective === 'string' ? parsed.subjective.trim() : '',
    objective: typeof parsed?.objective === 'string' ? parsed.objective.trim() : '',
    assessment: typeof parsed?.assessment === 'string' ? parsed.assessment.trim() : '',
    plan: typeof parsed?.plan === 'string' ? parsed.plan.trim() : '',
  };

  const hasSoapContent = Object.values(soap).some(Boolean);

  return {
    soap: hasSoapContent ? soap : null,
    formattedText: completion.content,
    model: completion.model,
    usage: completion.usage,
    disclaimer: CLINICAL_DISCLAIMER,
    privacyNotice: PRIVACY_NOTICE,
  };
};

/**
 * Convert technical medical instructions into patient-friendly language.
 * @param {{ instructions: string, readingLevel?: string, model?: string }} params
 */
const simplifyInstructions = async ({ instructions, readingLevel, model }) => {
  const normalizedInstructions = normalizeNotesInput(instructions);
  if (!normalizedInstructions) {
    const err = new Error('instructions is required and must be a non-empty string');
    err.statusCode = 400;
    throw err;
  }

  const targetReadingLevel =
    typeof readingLevel === 'string' && readingLevel.trim() ? readingLevel.trim() : 'plain language (around 6th-8th grade)';

  const systemPrompt = [
    'You are a clinical communication assistant.',
    'Rewrite technical medical instructions into clear, patient-friendly language.',
    'Preserve important medical meaning, safety warnings, medication timing/dosage instructions, and follow-up actions exactly as provided.',
    'Do not add new diagnoses, medications, or medical advice not present in the source.',
    `Target reading level: ${targetReadingLevel}.`,
    'Use short sentences and simple words where possible.',
    PRIVACY_NOTICE,
  ].join(' ');

  const userPrompt = `Medical instructions to simplify:\n\n${normalizedInstructions}`;
  const completion = await createCompletion({ systemPrompt, userPrompt, model, temperature: 0.2 });

  return {
    simplifiedInstructions: completion.content,
    model: completion.model,
    usage: completion.usage,
    disclaimer: CLINICAL_DISCLAIMER,
    privacyNotice: PRIVACY_NOTICE,
  };
};

export { summarizeHistory, formatSoap, simplifyInstructions };
