/**
 * Section 1: Authentication & Authorization
 * Base URL: /api/auth
 * Owner: Okorie Peter Chinecherem (#1)
 */

const notImplemented = (name) => async (_req, res) => {
  res.status(501).json({ success: false, message: `Not implemented: ${name}` });
};

// POST /api/auth/patient-signup (Public)
exports.patientSignup = notImplemented('POST /api/auth/patient-signup');

// POST /api/auth/register (Admin)
exports.register = notImplemented('POST /api/auth/register');

// POST /api/auth/login (Public)
exports.login = notImplemented('POST /api/auth/login');

// GET /api/auth/me (Authenticated)
exports.me = notImplemented('GET /api/auth/me');

// PATCH /api/auth/change-password (Authenticated)
exports.changePassword = notImplemented('PATCH /api/auth/change-password');
