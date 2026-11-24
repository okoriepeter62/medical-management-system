/**
 * Section 2: Staff Management
 * Base URL: /api/staff
 * Owner: Oniwon Faith #2
 */

const notImplemented = (name) => async (_req, res) => {
  res.status(501).json({ success: false, message: `Not implemented: ${name}` });
};

// GET /api/staff (Authenticated)
export const getAllStaff = notImplemented('GET /api/staff');

// GET /api/staff/:id (Authenticated)
export const getStaffById = notImplemented('GET /api/staff/:id');

// PATCH /api/staff/:id (Admin)
export const updateStaff = notImplemented('PATCH /api/staff/:id');

// DELETE /api/staff/:id (Admin)
export const deactivateStaff = notImplemented('DELETE /api/staff/:id');
