// Paystack configuration.
// TODO: Export base URL, secret key helpers, or an HTTP client wrapper for Paystack API calls.

const paystackConfig = {
  baseUrl: process.env.PAYSTACK_BASE_URL || 'https://api.paystack.co',
  secretKey: process.env.PAYSTACK_SECRET_KEY,
};

export default paystackConfig;
