import Groq from 'groq-sdk';

const apiKey = process.env.GROQ_API_KEY;
const defaultModel = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';

let client;

/**
 * Returns a configured Groq SDK client.
 * Throws a clear error when the API key is missing.
 */
export const getGroqClient = () => {
  if (!apiKey) {
    const err = new Error('GROQ_API_KEY is not configured');
    err.statusCode = 500;
    throw err;
  }

  if (!client) {
    client = new Groq({ apiKey });
  }

  return client;
};

export { defaultModel };
