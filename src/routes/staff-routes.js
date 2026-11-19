/**
 * Section 2: Staff Management
 * Base URL: /api/staff
 * Owner: Oniwon Faith (#2)
 */
const express = require('express');
const staffController = require('../controllers/staff-controller');
// const { authenticate } = require('../middlewares/auth-middleware');
// const { authorizeRoles } = require('../middlewares/role-middleware');

const router = express.Router();

// GET / - Retrieve all medical staff with role and specialty filters (Authenticated)
router.get('/', staffController.getAllStaff);

// GET /:id - Retrieve an individual staff member's profile and department (Authenticated)
router.get('/:id', staffController.getStaffById);

// PATCH /:id - Update staff role, specialty, or account status (Admin)
router.patch('/:id', staffController.updateStaff);

// DELETE /:id - Deactivate or suspend a staff account (Admin)
router.delete('/:id', staffController.deactivateStaff);

module.exports = router;
