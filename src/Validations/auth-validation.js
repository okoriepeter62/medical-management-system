import { z } from 'zod';

// Password validation reusable across registration schemas
const passwordSchema = z
  .string()
  .min(8, 'Password must contain at least 8 characters.')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter.')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
  .regex(/[0-9]/, 'Password must contain at least one number.');

// Patient registration validation
export const patientSignupSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, 'First name must contain at least 2 characters.'),

  lastName: z
    .string()
    .trim()
    .min(2, 'Last name must contain at least 2 characters.'),

  email: z
    .string()
    .trim()
    .email('Please provide a valid email address.')
    .toLowerCase(),

  password: passwordSchema,
});

// Staff registration validation
export const staffRegisterSchema = z.object({
  firstName: z.string().trim().min(2),
  lastName: z.string().trim().min(2),

  email: z
    .string()
    .trim()
    .email('Please provide a valid email address.')
    .toLowerCase(),

  password: passwordSchema,

  employeeId: z
    .string()
    .trim()
    .min(2, 'Employee ID is required.'),

  role: z.enum([
    'DOCTOR',
    'NURSE',
    'LAB_TECHNICIAN',
  ]),

  phone: z.string().trim().optional(),
  department: z.string().trim().optional(),
  specialization: z.string().trim().optional(),
  licenseNumber: z.string().trim().optional(),

  hiredAt: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Hire date must use YYYY-MM-DD format.')
    .optional(),
});

// Login validation
export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email('Please provide a valid email address.')
    .toLowerCase(),

  password: z.string().min(1, 'Password is required.'),
});

// Change password validation
export const changePasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(1, 'Current password is required.'),

  newPassword: passwordSchema,
});