import { verifyAuthToken } from '../utils/token-util.js';
import prisma from '../config/db.js';

const authenticate = async (req, res, next) => {
  try {
    // Get the Authorization header
    const authHeader = req.headers.authorization;

    // Check whether the token exists
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required. Please provide a valid token.',
      });
    }

    // Extract the token
    const token = authHeader.split(' ')[1];

    // Verify the token
    const decoded = verifyAuthToken(token);

    // Find the user in the database
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.sub,
      },
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
      },
    });

    // Check whether the user exists
    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Your account is unavailable. Please log in again.',
      });
    }

    // Attach authenticated user information to the request
    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    next();
  } catch (error) {
    if (
      error.name === 'TokenExpiredError' ||
      error.name === 'JsonWebTokenError' ||
      error.name === 'NotBeforeError'
    ) {
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired authentication token.',
      });
    }

    next(error);
  }
};

export default authenticate;

