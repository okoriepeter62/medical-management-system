/**
 * Section 9A: Billing & Invoices
 * Base URL: /api/billing/invoices
 * Owner: Okorie Peter Chinecherem (#9)
 */
const express = require('express');
const billingController = require('../controllers/billing-controller');
// const { authenticate } = require('../middlewares/auth-middleware');
// const { authorizeRoles } = require('../middlewares/role-middleware');

const router = express.Router();

// POST /invoices - Generate itemized invoices (Nurse, Admin)
router.post('/invoices', billingController.createInvoice);

// GET /invoices - Retrieve invoices (Admin sees all, Patient sees own)
router.get('/invoices', billingController.getInvoices);

module.exports = router;
