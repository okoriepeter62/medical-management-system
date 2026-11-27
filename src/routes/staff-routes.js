/**
 * Section 2: Staff Management
 * Base URL: /api/staff
 * Owner: Oniwon Faith (#2)
 */
import express from 'express';
import * as staffController from '../controllers/staff-controller.js';
// import { authenticate } from '../middlewares/auth-middleware.js';
// import { authorizeRoles } from '../middlewares/role-middleware.js';

const router = express.Router();

// GET / - Retrieve all medical staff with role and specialty filters (Authenticated)
router.get('/', staffController.getAllStaff);

// GET /:id - Retrieve an individual staff member's profile and department (Authenticated)
router.get('/:id', staffController.getStaffById);

// PATCH /:id - Update staff role, specialty, or account status (Admin)
router.patch('/:id', staffController.updateStaff);

// DELETE /:id - Deactivate or suspend a staff account (Admin)
router.delete('/:id', staffController.deactivateStaff);

export default router;
