/**
 * Section 9A: Billing & Invoices
 * Base URL: /api/billing/invoices
 * Owner: Okorie Peter Chinecherem (#9)
 */
import express from 'express';
import * as billingController from '../controllers/billing-controller.js';
// import { authenticate } from '../middlewares/auth-middleware.js';
// import { authorizeRoles } from '../middlewares/role-middleware.js';

const router = express.Router();

// POST /invoices - Generate itemized invoices (Nurse, Admin)
router.post('/invoices', billingController.createInvoice);

// GET /invoices - Retrieve invoices (Admin sees all, Patient sees own)
router.get('/invoices', billingController.getInvoices);

export default router;
