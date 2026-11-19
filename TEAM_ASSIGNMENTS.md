# Team Assignments — Healthcare Management System

## Group Members

| Name | Matric Number | Email | Assigned Sections |
| --- | --- | --- | --- |
| **Oniwon Faith** | BAD/2026/TC-9/0031 | faithoniwon911@gmail.com | **Even-numbered sections** (2, 4, 6, 8, 10) |
| **Okorie Peter Chinecherem** | BAD/2026/TC-9/0119 | okoriepeter62@gmail.com | **Odd-numbered sections** (1, 3, 5, 7, 9) |

## Section Ownership

### Okorie Peter Chinecherem — Odd Sections

| # | Section | Base URL(s) | Key Files |
| --- | --- | --- | --- |
| 1 | Authentication & Authorization | `/api/auth` | `src/routes/auth-routes.js`, `src/controllers/auth-controller.js` |
| 3 | Patient Management | `/api/patients` | `src/routes/patient-routes.js`, `src/controllers/patient-controller.js` |
| 5 | Triage & Vital Signs Management | `/api/patients/:id/vitals`, `/api/vitals/:vitalId` | `src/routes/vitals-routes.js`, `src/controllers/vitals-controller.js` |
| 7 | Prescriptions & Laboratory Management | `/api/patients/:id/prescriptions`, `/api/patients/:id/labs`, `/api/labs/:labId` | `src/routes/prescription-routes.js`, `src/controllers/prescription-controller.js`, `src/routes/lab-routes.js`, `src/controllers/lab-controller.js` |
| 9 | Billing & Payment Management | `/api/billing/invoices`, `/api/payments` | `src/routes/billing-routes.js`, `src/controllers/billing-controller.js`, `src/routes/payment-routes.js`, `src/controllers/payment-controller.js` |

### Oniwon Faith — Even Sections

| # | Section | Base URL(s) | Key Files |
| --- | --- | --- | --- |
| 2 | Staff Management | `/api/staff` | `src/routes/staff-routes.js`, `src/controllers/staff-controller.js` |
| 4 | Appointment Management | `/api/appointments` | `src/routes/appointment-routes.js`, `src/controllers/appointment-controller.js` |
| 6 | Medical Records & Consultations | `/api/patients/:id/records`, `/api/records/:recordId` | `src/routes/record-routes.js`, `src/controllers/record-controller.js` |
| 8 | AI Clinical Assistant | `/api/ai` | `src/routes/ai-routes.js`, `src/controllers/ai-controller.js` |
| 10 | Audit Logs & System Accountability | `/api/audit-logs` | `src/routes/audit-log-routes.js`, `src/controllers/audit-log-controller.js` |

## Shared / Cross-Cutting Areas

These may require coordination between both members as features are implemented:

- `prisma/schema.prisma` — database models and relations (PostgreSQL + Prisma)
- `src/middlewares/` — auth, role/authorization, audit logging, error handling
- `src/config/` — database, Cloudinary, Groq, Paystack configuration
- `src/integrations/` — external service wrappers (Cloudinary, Groq, Paystack, Resend)
- `src/utils/` — JWT helpers, response helpers, shared utilities
- `src/app.js` and `src/routes/index.js` — app wiring and route mounting

## Notes

- Database: **PostgreSQL only** with **Prisma ORM** (team decision).
- Authentication: JWT.
- External services: Cloudinary, Groq API, Paystack, Resend (optional).
- Route and controller files are scaffolded with TODO/stub handlers; implement business logic in your assigned sections.
- When touching shared files (schema, middlewares, app wiring), communicate with your teammate to avoid conflicts.
