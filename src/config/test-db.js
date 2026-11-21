import 'dotenv/config';
import prisma from './db.js';

try {
  await prisma.$connect();

  console.log('PostgreSQL database connected successfully!');
} catch (error) {
  console.error('Database connection failed:', error.message);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}