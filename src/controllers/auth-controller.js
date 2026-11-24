import {
  registerPatient,
  loginUser,
  createStaffAccount,
  changeUserPassword,
} from '../services/auth-service.js';

// Register a new patient
export const patientSignup = async (req, res, next) => {
  try {
    const result = await registerPatient(req.body);

    return res.status(201).json({
      success: true,
      message: 'Patient account created successfully.',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Register a staff member (Admin only)
export const register = async (req, res, next) => {
  try {
    const result = await createStaffAccount(req.body);

    return res.status(201).json({
      success: true,
      message: 'Staff account created successfully.',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Login an existing user
export const login = async (req, res, next) => {
  try {
    const result = await loginUser(req.body);

    return res.status(200).json({
      success: true,
      message: 'Login successful.',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get the currently authenticated user
export const me = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Authenticated user retrieved successfully.',
    data: {
      user: req.user,
    },
  });
};

// Change authenticated user's password
export const changePassword = async (req, res, next) => {
  try {
    await changeUserPassword(req.user.id, req.body);

    return res.status(200).json({
      success: true,
      message: 'Password changed successfully.',
    });
  } catch (error) {
    next(error);
  }
};