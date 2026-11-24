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
export const initializePayment = notImplemented('POST /api/payments/initialize');

// POST /api/payments/webhook (Payment Gateway)
export const paymentWebhook = notImplemented('POST /api/payments/webhook');

// GET /api/payments/verify/:reference (Patient, Admin)
export const verifyPayment = notImplemented('GET /api/payments/verify/:reference');
