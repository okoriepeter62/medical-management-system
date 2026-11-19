// Paystack configuration.
// TODO: Export base URL, secret key helpers, or an HTTP client wrapper for Paystack API calls.

module.exports = {
  baseUrl: process.env.PAYSTACK_BASE_URL || 'https://api.paystack.co',
  secretKey: process.env.PAYSTACK_SECRET_KEY,
};
