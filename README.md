# Construction Fund and Expense Management System

Initial monorepo foundation for a construction contractor platform to manage workers, sites, fund movement, expense approvals, and financial reporting.

## Tech Stack

- Frontend: React + TypeScript + Vite + Tailwind CSS
- Backend: Node.js + Express + TypeScript
- Database: MongoDB + Mongoose
- Validation: Zod
- Testing: Vitest + Supertest

## Roles (planned)

- Main Admin: Full business access
- Additional Admin: Scoped permissions
- Worker: Self-only records and actions

## Project Structure

```text
.
├── backend
│   ├── src
│   │   ├── config
│   │   ├── routes
│   │   ├── app.ts
│   │   ├── server.ts
│   │   └── health.test.ts
│   ├── .env.example
│   └── package.json
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── test
│   │   ├── App.tsx
│   │   └── App.test.tsx
│   ├── .env.example
│   └── package.json
└── package.json
```

## Local Development

### Prerequisites

- Node.js 20+
- npm 10+
- MongoDB running locally (or an accessible MongoDB URI)

### Install

```bash
npm install
```

### Environment Variables

Create local env files from examples:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

### Start Frontend and Backend

```bash
npm run dev
```

Or individually:

```bash
npm run dev:backend
npm run dev:frontend
```

- Backend: `http://localhost:4000`
- Health check: `GET http://localhost:4000/api/v1/health`
- Frontend: `http://localhost:5173`

## Commands

```bash
npm run lint
npm run test
npm run build
npm run format
```

## Current Foundation

- Workspace-based frontend/backend structure
- Backend Express app with modular route wiring
- MongoDB config through Zod-validated environment variables
- Health-check API endpoint
- Frontend routing and responsive application shell
- Initial frontend and backend tests

## Remaining Setup Before Feature Development

- Define role-based authorization model and permission matrix
- Add domain modules (workers, sites, funds, expenses, receipts, approvals)
- Add request validation middleware and API error handling conventions
- Add persistent logging, metrics, and audit trail strategy
- Add CI pipeline for lint/test/build

> No fake authentication is implemented in this foundation.
