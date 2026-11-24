/**
 * Section 10: Audit Logs & System Accountability
 * Base URL: /api/audit-logs
 * Owner: Oniwon Faith (#10)
 */
import express from 'express';
import * as auditLogController from '../controllers/audit-log-controller.js';
// import { authenticate } from '../middlewares/auth-middleware.js';
// import { authorizeRoles } from '../middlewares/role-middleware.js';

const router = express.Router();

// GET / - Retrieve audit logs (Admin)
router.get('/', auditLogController.getAuditLogs);

export default router;
