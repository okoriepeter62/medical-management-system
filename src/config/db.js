const { PrismaClient } = require('@prisma/client');

// Prisma Client singleton for PostgreSQL.
// TODO: Ensure `npx prisma generate` has been run after schema changes.
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

module.exports = prisma;
