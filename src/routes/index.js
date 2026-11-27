import express from 'express';

import authRoutes from './auth-routes.js';
import staffRoutes from './staff-routes.js';
import patientRoutes from './patient-routes.js';
import appointmentRoutes from './appointment-routes.js';
import { patientVitalsRouter, vitalRouter } from './vitals-routes.js';
import { patientRecordsRouter, recordRouter } from './record-routes.js';
import { patientPrescriptionsRouter } from './prescription-routes.js';
import { patientLabsRouter, labRouter } from './lab-routes.js';
import aiRoutes from './ai-routes.js';
import billingRoutes from './billing-routes.js';
import paymentRoutes from './payment-routes.js';
import auditLogRoutes from './audit-log-routes.js';

const router = express.Router();

// Section 1 - Authentication & Authorization (Peter, Odd)
router.use('/auth', authRoutes);

// Section 2 - Staff Management (Faith, Even)
router.use('/staff', staffRoutes);

// Nested patient sub-resources (mount before general /patients routes)
router.use('/patients/:id/vitals', patientVitalsRouter); // Section 5 (Peter, Odd)
router.use('/patients/:id/records', patientRecordsRouter); // Section 6 (Faith, Even)
router.use('/patients/:id/prescriptions', patientPrescriptionsRouter); // Section 7A (Peter, Odd)
router.use('/patients/:id/labs', patientLabsRouter); // Section 7B (Peter, Odd)

// Section 3 - Patient Management (Peter, Odd)
router.use('/patients', patientRoutes);

// Section 4 - Appointment Management (Faith, Even)
router.use('/appointments', appointmentRoutes);

// Top-level resource routes referenced by spec
router.use('/vitals', vitalRouter); // PATCH /api/vitals/:vitalId (Section 5, Peter)
router.use('/records', recordRouter); // GET/PATCH /api/records/:recordId (Section 6, Faith)
router.use('/labs', labRouter); // PATCH /api/labs/:labId (Section 7B, Peter)

// Section 8 - AI Clinical Assistant (Faith, Even)
router.use('/ai', aiRoutes);

// Section 9 - Billing & Payment Management (Peter, Odd)
router.use('/billing', billingRoutes); // /api/billing/invoices
router.use('/payments', paymentRoutes); // /api/payments/*

// Section 10 - Audit Logs & System Accountability (Faith, Even)
router.use('/audit-logs', auditLogRoutes);

export default router;
