/**
 * Section 9B: Payment Processing
 * Base URL: /api/payments
 * Owner: Okorie Peter Chinecherem (#9)
 * Integration: Paystack
 */

const notImplemented = (name) => async (_req, res) => {
  res.status(501).json({ success: false, message: `Not implemented: ${name}` });
};

// POST /api/payments/initialize (Patient)
exports.initializePayment = notImplemented('POST /api/payments/initialize');

// POST /api/payments/webhook (Payment Gateway)
exports.paymentWebhook = notImplemented('POST /api/payments/webhook');

// GET /api/payments/verify/:reference (Patient, Admin)
exports.verifyPayment = notImplemented('GET /api/payments/verify/:reference');
