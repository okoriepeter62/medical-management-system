/**
 * Section 9A: Billing & Invoices
 * Base URL: /api/billing/invoices
 * Owner: Okorie Peter Chinecherem (#9)
 */

const notImplemented = (name) => async (_req, res) => {
  res.status(501).json({ success: false, message: `Not implemented: ${name}` });
};

// POST /api/billing/invoices (Nurse, Admin)
exports.createInvoice = notImplemented('POST /api/billing/invoices');

// GET /api/billing/invoices (Admin, Patient - patients can view their own)
exports.getInvoices = notImplemented('GET /api/billing/invoices');
