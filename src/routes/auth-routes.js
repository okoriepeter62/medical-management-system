/**
 * Section 1: Authentication & Authorization
 * Base URL: /api/auth
 * Owner: Okorie Peter Chinecherem (#1)
 */

import express from 'express';

import {
  patientSignup,
  register,
  login,
  me,
  changePassword,
} from '../controllers/auth-controller.js';

import authenticate from '../middlewares/auth-middleware.js';
import authorizeRoles from '../middlewares/role-middleware.js';
import validate from '../middlewares/validation-middleware.js';

import {
  patientSignupSchema,
  staffRegisterSchema,
  loginSchema,
  changePasswordSchema,
} from '../Validations/auth-validation.js';

const router = express.Router();

// POST /patient-signup - Public patient registration
router.post(
  '/patient-signup',
  validate(patientSignupSchema),
  patientSignup
);

// POST /register - Admin-only staff registration
router.post(
  '/register',
  authenticate,
  authorizeRoles('ADMIN'),
  validate(staffRegisterSchema),
  register
);

// POST /login - Public login
router.post(
  '/login',
  validate(loginSchema),
  login
);

// GET /me - Retrieve authenticated user's profile
router.get(
  '/me',
  authenticate,
  me
);

// PATCH /change-password - Change authenticated user's password
router.patch(
  '/change-password',
  authenticate,
  validate(changePasswordSchema),
  changePassword
);

export default router;