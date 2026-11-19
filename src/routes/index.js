const express = require('express');

const authRoutes = require('./auth-routes');
const staffRoutes = require('./staff-routes');
const patientRoutes = require('./patient-routes');
const appointmentRoutes = require('./appointment-routes');
const { patientVitalsRouter, vitalRouter } = require('./vitals-routes');
const { patientRecordsRouter, recordRouter } = require('./record-routes');
const { patientPrescriptionsRouter } = require('./prescription-routes');
const { patientLabsRouter, labRouter } = require('./lab-routes');
const aiRoutes = require('./ai-routes');
const billingRoutes = require('./billing-routes');
const paymentRoutes = require('./payment-routes');
const auditLogRoutes = require('./audit-log-routes');

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

module.exports = router;
