import prisma from '../config/db.js';

import {
  hashPassword,
  comparePassword,
} from '../utils/password-util.js';

import { generateAuthToken } from '../utils/token-util.js';

// Register a new patient
export const registerPatient = async (userData) => {
  const { firstName, lastName, email, password } = userData;

  try {
    // Hash the password before saving it
    const passwordHash = await hashPassword(password);

    // Create the user and patient profile together
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        role: 'PATIENT',

        patientProfile: {
          create: {
            firstName,
            lastName,
          },
        },
      },

      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,

        patientProfile: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    // Generate an authentication token
    const token = generateAuthToken(user);

    return {
      user,
      token,
    };
  } catch (error) {
    // Handle duplicate email addresses
    if (error.code === 'P2002') {
      const duplicateError = new Error(
        'An account with this email address already exists.',
      );

      duplicateError.statusCode = 409;
      throw duplicateError;
    }

    throw error;
  }
};

// Login an existing user
export const loginUser = async ({ email, password }) => {
  // Find the user by email
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  // Reject invalid email or password
  if (!user) {
    const error = new Error('Invalid email or password.');
    error.statusCode = 401;
    throw error;
  }

  // Verify the submitted password
  const isPasswordValid = await comparePassword(
    password,
    user.passwordHash,
  );

  if (!isPasswordValid) {
    const error = new Error('Invalid email or password.');
    error.statusCode = 401;
    throw error;
  }

  // Check whether the account is active
  if (!user.isActive) {
    const error = new Error('Your account is inactive. Please contact the administrator.');
    error.statusCode = 403;
    throw error;
  }

  // Generate authentication token
  const token = generateAuthToken(user);

  // Never return the password hash
  const { passwordHash, ...safeUser } = user;

  return {
    user: safeUser,
    token,
  };
};


// Create a staff account (Admin only)
export const createStaffAccount = async (staffData) => {
  const {
    firstName,
    lastName,
    email,
    password,
    employeeId,
    role,
    phone,
    department,
    specialization,
    licenseNumber,
    hiredAt,
  } = staffData;

  try {
    // Hash the staff member's password
    const passwordHash = await hashPassword(password);

    // Create the user and staff profile together
    const staff = await prisma.user.create({
      data: {
        email,
        passwordHash,
        role,

        staffProfile: {
          create: {
            firstName,
            lastName,
            employeeId,
            phone,
            department,
            specialization,
            licenseNumber,
            hiredAt: hiredAt
              ? new Date(`${hiredAt}T00:00:00.000Z`)
              : null,
          },
        },
      },

      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,

        staffProfile: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            employeeId: true,
            phone: true,
            department: true,
            specialization: true,
            licenseNumber: true,
            hiredAt: true,
          },
        },
      },
    });

    return staff;
  } catch (error) {
    if (error.code === 'P2002') {
      const duplicateError = new Error(
        'The email address or employee ID already exists.',
      );

      duplicateError.statusCode = 409;
      throw duplicateError;
    }

    throw error;
  }
};

// Change a user's password
export const changeUserPassword = async (
  userId,
  { currentPassword, newPassword },
) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      passwordHash: true,
      isActive: true,
    },
  });

  if (!user) {
    const error = new Error('User account not found.');
    error.statusCode = 404;
    throw error;
  }

  if (!user.isActive) {
    const error = new Error('Your account is inactive.');
    error.statusCode = 403;
    throw error;
  }

  // Confirm that the current password is correct
  const isCurrentPasswordValid = await comparePassword(
    currentPassword,
    user.passwordHash,
  );

  if (!isCurrentPasswordValid) {
    const error = new Error('Current password is incorrect.');
    error.statusCode = 400;
    throw error;
  }

  // Prevent users from reusing their current password
  const isSamePassword = await comparePassword(
    newPassword,
    user.passwordHash,
  );

  if (isSamePassword) {
    const error = new Error(
      'Your new password must be different from your current password.',
    );
    error.statusCode = 400;
    throw error;
  }

  // Hash the new password before saving it
  const newPasswordHash = await hashPassword(newPassword);

  await prisma.user.update({
    where: { id: userId },
    data: {
      passwordHash: newPasswordHash,
    },
  });
};