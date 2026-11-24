// Role-based authorization middleware.
// TODO: Restrict access based on user roles (PATIENT, DOCTOR, NURSE, ADMIN, LAB_TECHNICIAN).

export const authorizeRoles = (..._allowedRoles) => {
  return (_req, _res, next) => {
    // TODO: implement
    next();
  };
};
