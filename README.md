# Prisma + NestJS + Angular Monorepo

> **Shared Prisma types across your full-stack application using Nx**

This workspace demonstrates how to use Prisma's new generator to share types between a NestJS backend and Angular frontend in an Nx monorepo.

## 🏗️ Project Structure

```
apps/
├── blog-api/          # NestJS backend API
├── blog-api-e2e/      # E2E tests for API
└── blog-app/          # Angular frontend app

libs/
└── prisma-generated/  # Shared Prisma types library

prisma/
└── schema.prisma      # Database schema
```

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up your database**
   ```bash
   # Copy environment file
   cp .env.example .env
   
   # Update DATABASE_URL in .env with your PostgreSQL connection
   ```

3. **Generate Prisma client and types**
   ```bash
   npx prisma generate
   ```

4. **Run database migrations**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start development servers**
   ```bash
   # Start NestJS API (port 3000)
   npx nx serve blog-api
   
   # Start Angular app (port 4200)
   npx nx serve blog-app
   ```

## 🎯 Key Features

- **✅ Shared Types**: Same Prisma types used in both frontend and backend
- **✅ Type Safety**: Full TypeScript intellisense across the stack
- **✅ Clean Separation**: Frontend gets types only, backend gets full client
- **✅ Build Safety**: Angular builds without Node.js dependencies

## 📦 Import Paths

**Backend (NestJS)**:
```typescript
import { PrismaClient } from '@shared/prisma-generated/client';
```

**Frontend (Angular)**:
```typescript
import type { Post, PostStatus } from '@shared/prisma-generated/types';
```

## 🛠️ Available Commands

```bash
# Build all projects
npx nx run-many -t build

# Test all projects
npx nx run-many -t test

# Lint all projects
npx nx run-many -t lint

# Generate new Prisma types
npx prisma generate
```

## 📖 Learn More

This setup uses Prisma's new `prisma-client` generator to create reusable types outside of `node_modules`. Read the full guide: [Achieving Type Safety Across Angular and NestJS with Prisma's New Generator](https://arcadioquintero.com/achieving-type-safety-across-angular-and-nestjs-with-prismas-new-generator)

---

Built with ❤️ using [Nx](https://nx.dev), [Prisma](https://prisma.io), [NestJS](https://nestjs.com), and [Angular](https://angular.io)