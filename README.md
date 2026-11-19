# Healthcare Management System (Medical Backend)

Standalone backend project for a digital healthcare platform that simplifies hospital operations and improves patient information management.

## Team

- **Oniwon Faith** — BAD/2026/TC-9/0031 — faithoniwon911@gmail.com — **2, 4, 6, 8, 10**
- **Okorie Peter Chinecherem** — BAD/2026/TC-9/0119 — okoriepeter62@gmail.com — **1, 3, 5, 7, 9**

See [`TEAM_ASSIGNMENTS.md`](./TEAM_ASSIGNMENTS.md) for detailed ownership and file mapping.

## Project Overview

The system supports core healthcare workflows for administrators, doctors, nurses, and patients, including:

- Patient registration and management
- Appointment scheduling and tracking
- Triage and vital signs recording
- Medical records and SOAP consultation notes
- Prescriptions and laboratory requests/results
- AI-assisted clinical documentation support
- Billing, invoicing, and online payments
- Audit logging for accountability

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (primary database)
- **ORM:** Prisma
- **Authentication:** JWT (JSON Web Token)
- **AI Integration:** Groq API
- **Cloud Storage:** Cloudinary
- **Payment Integration:** Paystack
- **Email (Optional):** Resend

> **Architecture decision:** This project uses **PostgreSQL + Prisma only**. Do not introduce a competing ORM/ODM or alternate database source of truth without a deliberate team decision.

## External Service Integrations

- **Cloudinary:** Secure storage and management of patient medical documents and laboratory files
- **Groq API:** AI-assisted medical history summarization, SOAP note formatting, and simplifying medical instructions
- **Paystack:** Online payment initialization, webhook confirmation, and transaction verification
- **Resend (Optional):** Appointment notifications and payment receipts

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm
- PostgreSQL database

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create your local environment file:
   ```bash
   copy .env.example .env
   ```
   (On macOS/Linux use `cp .env.example .env`)
3. Update `.env` with your local credentials:
   - `DATABASE_URL` (PostgreSQL connection string)
   - `JWT_SECRET` and auth settings
   - Cloudinary, Groq, Paystack, and optional Resend keys
4. Generate Prisma client and run migrations (after defining schema/models):
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
   Or run in production mode:
   ```bash
   npm start
   ```

The API will be available at `http://localhost:<PORT>` (default `5000`).
Health check: `GET /health`

## Project Structure

```text
.
├─ prisma/
│  └─ schema.prisma            # Prisma schema (PostgreSQL)
├─ src/
│  ├─ app.js                   # Express app setup and middleware
│  ├─ config/                  # DB and third-party service configuration
│  ├─ controllers/             # Request handlers (business logic stubs/TODOs)
│  ├─ integrations/            # External service wrappers (Groq, Paystack, storage, email)
│  ├─ middlewares/             # Auth, roles, audit, error handling
│  ├─ routes/                  # Route definitions and API mounting
│  └─ utils/                   # Shared helpers (JWT, responses, async wrapper, etc.)
├─ server.js                   # Server entry point
├─ .env.example                # Environment variable template
├─ TEAM_ASSIGNMENTS.md         # Team member ownership by section
└─ README.md
```

## API Endpoint Specification (Scaffolded)

Base path: `/api`

| # | Section | Base URL | Owner |
| --- | --- | --- | --- |
| 1 | Authentication & Authorization | `/api/auth` | Peter (Odd) |
| 2 | Staff Management | `/api/staff` | Faith (Even) |
| 3 | Patient Management | `/api/patients` | Peter (Odd) |
| 4 | Appointment Management | `/api/appointments` | Faith (Even) |
| 5 | Triage & Vital Signs Management | `/api/patients/:id/vitals`, `/api/vitals/:vitalId` | Peter (Odd) |
| 6 | Medical Records & Consultations | `/api/patients/:id/records`, `/api/records/:recordId` | Faith (Even) |
| 7 | Prescriptions & Laboratory Management | `/api/patients/:id/prescriptions`, `/api/patients/:id/labs`, `/api/labs/:labId` | Peter (Odd) |
| 8 | AI Clinical Assistant | `/api/ai` | Faith (Even) |
| 9 | Billing & Payment Management | `/api/billing/invoices`, `/api/payments` | Peter (Odd) |
| 10 | Audit Logs & System Accountability | `/api/audit-logs` | Faith (Even) |

> Route and controller files are scaffolded with placeholder handlers (`501 Not Implemented`) so each teammate can implement their assigned logic.

## Important Notes

- **Patient workflow statuses:** Waiting, In Triage, With Doctor, Admitted, Discharged
- **SOAP documentation:** Subjective, Objective, Assessment, Plan
- **AI safeguards:** AI-generated clinical information must be reviewed and approved by qualified medical personnel before being added to official patient records. Do not send patient-identifiable information to external AI services without appropriate privacy safeguards.
- **Payments:** Webhook endpoints should validate gateway signatures and typically should not rely on user JWT auth.

## Scripts

- `npm run dev` — start with nodemon
- `npm start` — start server
- `npm run prisma:generate` — generate Prisma client
- `npm run prisma:migrate` — run development migrations
- `npm run prisma:studio` — open Prisma Studio
- `npm run format` — format with Prettier
