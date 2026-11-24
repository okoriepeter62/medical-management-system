/**
 * Section 1: Authentication & Authorization
 * Base URL: /api/auth
 * Owner: Okorie Peter Chinecherem (#1)
 */

const notImplemented = (name) => async (_req, res) => {
  res.status(501).json({ success: false, message: `Not implemented: ${name}` });
};

// POST /api/auth/patient-signup (Public)
export const patientSignup = notImplemented('POST /api/auth/patient-signup');

// POST /api/auth/register (Admin)
export const register = notImplemented('POST /api/auth/register');

// POST /api/auth/login (Public)
export const login = notImplemented('POST /api/auth/login');

// GET /api/auth/me (Authenticated)
export const me = notImplemented('GET /api/auth/me');

// PATCH /api/auth/change-password (Authenticated)
export const changePassword = notImplemented('PATCH /api/auth/change-password');
