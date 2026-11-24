import jwt from 'jsonwebtoken';

// Get the secret key from the environment variables
const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('JWT_SECRET is not configured in environment variables.');
  }

  return secret;
};

// Generate an authentication token for a user
export const generateAuthToken = (user) => {
  const payload = {
    sub: user.id,
    email: user.email,
    role: user.role,
  };

  return jwt.sign(payload, getJwtSecret(), {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  });
};

// Verify an authentication token
export const verifyAuthToken = (token) => {
  return jwt.verify(token, getJwtSecret());
};