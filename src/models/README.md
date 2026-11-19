# Models

This project uses **PostgreSQL with Prisma ORM**.

- Define database models in `prisma/schema.prisma`.
- Use the Prisma Client via `src/config/db.js` (or equivalent shared module) for database access.
- Do not add Mongoose models here unless the team makes an explicit architectural change (not planned).
