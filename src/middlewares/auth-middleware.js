// Authentication middleware (JWT).
// TODO: Verify JWT, attach authenticated user to req.user, and handle unauthorized access.

const authenticate = (req, _res, next) => {
  // TODO: implement
  next();
};

module.exports = { authenticate };
