/**
 * Section 1: Authentication & Authorization
 * Base URL: /api/auth
 * Owner: Okorie Peter Chinecherem (#1)
 */
import express from 'express';
import * as authController from '../controllers/auth-controller.js';
// import { authenticate } from '../middlewares/auth-middleware.js';
// import { authorizeRoles } from '../middlewares/role-middleware.js';

const router = express.Router();

// POST /patient-signup - Register a new patient account (Public)
router.post('/patient-signup', authController.patientSignup);

// POST /register - Register doctors, nurses, and administrators (Admin)
router.post('/register', authController.register);

// POST /login - Authenticate users and generate JWT token (Public)
router.post('/login', authController.login);

// GET /me - Retrieve currently authenticated user's profile and role (Authenticated)
router.get('/me', authController.me);

// PATCH /change-password - Allow users to change their passwords (Authenticated)
router.patch('/change-password', authController.changePassword);

export default router;
