/**
 * Section 9B: Payment Processing
 * Base URL: /api/payments
 * Owner: Okorie Peter Chinecherem (#9)
 */
const express = require('express');
const paymentController = require('../controllers/payment-controller');
// const { authenticate } = require('../middlewares/auth-middleware');
// const { authorizeRoles } = require('../middlewares/role-middleware');

const router = express.Router();

// POST /initialize - Initialize an online payment and generate a checkout link (Patient)
router.post('/initialize', paymentController.initializePayment);

// POST /webhook - Receive payment confirmation from the payment gateway (Payment Gateway)
// Note: Webhook routes typically must not require user auth; verify gateway signature instead.
router.post('/webhook', paymentController.paymentWebhook);

// GET /verify/:reference - Verify a transaction reference with the payment gateway (Patient, Admin)
router.get('/verify/:reference', paymentController.verifyPayment);

module.exports = router;
