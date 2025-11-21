# Biswa Tech Solutions - Payment Platform

## Overview

A Telegram-optimized payment platform for subscription-based automation services. The application presents four distinct pricing tiers (Basic, Standard, Pro, Premium) with integrated UPI payment functionality. Built with a mobile-first approach targeting Telegram's in-app browser, featuring QR code generation and tier-specific visual theming.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: React with TypeScript using Vite as the build tool and development server. The application follows a component-based architecture with client-side routing.

**UI Framework**: Shadcn/ui component library built on Radix UI primitives with Tailwind CSS for styling. Components are modular and reusable, following the "New York" style variant with custom theming support.

**Routing Strategy**: Client-side routing using Wouter (lightweight React Router alternative). Each pricing tier has a dedicated route (`/plan/basic`, `/plan/standard`, `/plan/pro`, `/plan/premium`) with a root redirect to the basic plan.

**State Management**: TanStack Query (React Query) for server state management. Custom hooks pattern for local UI state. No global state management library chosen, preferring composition and prop drilling for simplicity.

**Styling System**: Tailwind CSS with extensive custom design tokens for tier-specific theming. The design system includes four tier-specific color schemes with gradient backgrounds, borders, and accent colors. Mobile-first responsive design with breakpoint utilities.

**Design Philosophy**: Reference-based approach drawing from premium payment platforms (Stripe, Razorpay, PayPal). Typography uses Inter for body text and Poppins for display elements. Spacing follows consistent 4px-based increments.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js. Separate entry points for development (with Vite middleware) and production builds.

**Development vs Production**: Development mode integrates Vite's HMR and middleware for live reloading. Production serves pre-built static assets from the dist directory. Both modes use the same Express application core.

**Session Management**: Uses connect-pg-simple for PostgreSQL-backed sessions, though session implementation appears minimal in current codebase.

**API Structure**: RESTful API design with all routes prefixed with `/api`. Minimal route implementation currently - placeholder structure in `server/routes.ts` ready for expansion.

**Request Logging**: Custom middleware logs all API requests with timestamps, paths, durations, and response details for debugging and monitoring.

### Data Storage Solutions

**Database**: PostgreSQL via Neon serverless driver (`@neondatabase/serverless`). Configuration expects a `DATABASE_URL` environment variable.

**ORM**: Drizzle ORM for type-safe database operations with Zod integration for schema validation. Migration files stored in `./migrations` directory with schema definitions in `shared/schema.ts`.

**Current Schema**: Minimal user table with UUID primary keys, username (unique), and password fields. Schema uses `gen_random_uuid()` for automatic ID generation.

**Storage Interface**: Abstracted storage interface (`IStorage`) with in-memory implementation (`MemStorage`) for development/testing. Designed for easy swapping to database-backed implementation.

**Rationale**: Drizzle chosen for TypeScript-first approach with excellent type inference. Neon serverless driver enables edge deployment and handles connection pooling automatically.

### External Dependencies

**Payment Integration**: UPI (Unified Payments Interface) payment system with QR code generation. UPI ID: `bishwa6@ptyes`. Uses standard UPI deep linking protocol (`upi://pay?...`) for payment initiation.

**QR Code Generation**: `qrcode.react` library for generating scannable UPI QR codes client-side. Configured at 200x200px minimum for optimal scanability.

**Design Assets**: Custom logo stored in `attached_assets/generated_images/biswa_tech_solutions_logo.png`. Google Fonts CDN for Inter and Poppins typefaces.

**Development Tools**: 
- Replit-specific plugins for development environment integration (cartographer, dev-banner, runtime-error-modal)
- ESBuild for production server bundling
- PostCSS with Autoprefixer for CSS processing

**UI Component Dependencies**: Extensive Radix UI primitives for accessible, unstyled component foundations. Lucide React for iconography. Vaul for drawer components. Embla Carousel for carousel functionality (currently unused).

**Form Handling**: React Hook Form with Hookform Resolvers for validation integration, though no forms currently implemented in the codebase.

**Date Utilities**: date-fns for date manipulation (included but not actively used in current implementation).

### Architecture Decisions

**Monorepo Structure**: Client, server, and shared code in single repository with path aliases. Shared directory contains types and schemas used by both frontend and backend, ensuring type safety across the stack.

**TypeScript Configuration**: Strict mode enabled with ESNext module resolution. Bundler module resolution for modern import syntax. No emit during type checking - relies on build tools for transpilation.

**Why This Matters**: The shared schema approach prevents API contract drift. Changes to data models automatically propagate type errors if frontend/backend get out of sync.

**Mobile-First Justification**: Primary target is Telegram's in-app browser on mobile devices. All spacing, typography, and interaction patterns optimized for touch interfaces with progressive enhancement for desktop.

**Static Payment Plans**: Payment tiers defined as static configuration in `shared/payment-plans.ts` rather than database-driven. Simplifies deployment and ensures consistent pricing without database dependency.

**Alternative Considered**: Database-driven pricing would enable dynamic updates but adds complexity. Static configuration chosen for initial MVP with option to migrate later.

**Session Storage Choice**: PostgreSQL-backed sessions via connect-pg-simple chosen over in-memory or Redis alternatives. Rationale: simpler infrastructure (single database), better for serverless deployments, automatic cleanup of expired sessions.