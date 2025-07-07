# Portfolio Website

## Overview

This is a modern portfolio website built with React and Express.js, featuring a contact form with database integration. The application showcases a professional portfolio with sections for about, skills, projects, and contact information. It uses a modern tech stack with TypeScript, Tailwind CSS, and shadcn/ui components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state
- **Animations**: Framer Motion for smooth transitions and effects
- **UI Components**: Radix UI primitives through shadcn/ui

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reloading with Vite integration

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with smooth scroll behavior
- **Hero Section**: Landing area with call-to-action buttons
- **About Section**: Personal information and philosophy
- **Skills Section**: Technical skills with visual indicators
- **Projects Section**: Portfolio showcase with filtering capabilities
- **Contact Section**: Contact form with validation and submission
- **Footer**: Site-wide footer with social links

### Backend Components
- **Routes**: RESTful API endpoints for contact form submission
- **Storage**: Abstracted storage layer supporting both memory and database storage
- **Database Schema**: User management and contact submission tables
- **Validation**: Zod schema validation for form inputs

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data is validated using Zod schemas
   - Data is sent to `/api/contact` endpoint via POST request
   - Server validates and stores submission in database
   - Success/error feedback is displayed to user

2. **Portfolio Display**:
   - Static portfolio content is rendered on page load
   - Framer Motion handles scroll-triggered animations
   - Smooth scrolling navigation between sections

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Library**: Radix UI components via shadcn/ui
- **Styling**: Tailwind CSS, clsx, class-variance-authority
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form with Zod resolvers
- **Routing**: Wouter
- **Date Handling**: date-fns

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, PostgreSQL drivers
- **Validation**: Zod
- **Session**: connect-pg-simple
- **Development**: tsx for TypeScript execution

### Build Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type checking and compilation
- **ESBuild**: Backend bundling for production
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Development Environment
- Frontend served by Vite dev server with HMR
- Backend runs with tsx for TypeScript execution
- Database migrations handled by Drizzle Kit
- Integrated development experience with proxy setup

### Production Build
- Frontend built with Vite to static assets
- Backend bundled with ESBuild for Node.js
- Database schema pushed using Drizzle Kit
- Environment variables required for database connection

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)

## Changelog

- July 07, 2025. Initial setup
- July 07, 2025. Built personalized portfolio for Farazul Hoda with cybersecurity focus
- July 07, 2025. Implemented dark/light theme toggle functionality
- July 07, 2025. Updated all content to reflect Farazul's professional background and skills
- July 07, 2025. Enhanced with authentic GitHub data (91 followers, 274 following, actual repositories)
- July 07, 2025. Added achievements section showcasing GitHub accomplishments (Arctic Code Vault, Pull Shark, etc.)
- July 07, 2025. Updated skills section with programming languages from GitHub profile
- July 07, 2025. Integrated MR. BiNARY branding and IIT education details
- July 07, 2025. Implemented modern glass UI design with glassmorphism effects throughout portfolio
- July 07, 2025. Added gradient backgrounds and glass card components for premium visual experience

## User Preferences

Preferred communication style: Simple, everyday language.

## Portfolio Content
- **Professional Focus**: Cybersecurity, Network Administration, Vulnerability Management
- **Key Skills**: Penetration Testing, Cloud Security (AWS, Azure, GCP), Threat Intelligence
- **Tools Expertise**: Splunk, CrowdStrike, Microsoft Sentinel, Wireshark, Microsoft Intune
- **Contact**: imfaraz730@outlook.com, +1 (312) 912-4504
- **Social**: LinkedIn (farazul-hoda), GitHub (farazulhoda)
- **Achievement**: 95% incident detection rate, 30% reduction in potential breaches