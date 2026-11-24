import { PrismaClient } from '@prisma/client';

// Prisma Client singleton for PostgreSQL.
// TODO: Ensure `npx prisma generate` has been run after schema changes.
const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

export default prisma;
