// Audit logging middleware.
// TODO: Record sensitive actions (who accessed/created/updated/modified records and when).

const auditLog = (_action) => {
  return (_req, _res, next) => {
    // TODO: implement
    next();
  };
};

module.exports = { auditLog };
