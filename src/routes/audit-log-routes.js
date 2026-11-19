/**
 * Section 10: Audit Logs & System Accountability
 * Base URL: /api/audit-logs
 * Owner: Oniwon Faith (#10)
 */
const express = require('express');
const auditLogController = require('../controllers/audit-log-controller');
// const { authenticate } = require('../middlewares/auth-middleware');
// const { authorizeRoles } = require('../middlewares/role-middleware');

const router = express.Router();

// GET / - Retrieve audit logs (Admin)
router.get('/', auditLogController.getAuditLogs);

module.exports = router;
