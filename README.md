# Farazul Hoda - Cybersecurity Professional Portfolio

A modern, glassmorphism-styled portfolio website showcasing cybersecurity expertise, programming skills, and professional achievements. Built with React, TypeScript, and cutting-edge glass UI design.

## 🌟 Features

### Design & UI
- **Modern Glassmorphism Design**: Frosted glass effects with backdrop blur and transparency
- **Dark/Light Theme Toggle**: Seamless theme switching with glass components
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Gradient Backgrounds**: Beautiful multi-color gradients for visual depth

### Portfolio Sections
- **Hero Section**: Professional introduction with glass-framed imagery
- **About**: Personal background and GitHub statistics (91 followers, IIT education)
- **GitHub Achievements**: Arctic Code Vault Contributor, Pull Shark, Quickdraw
- **Skills**: Programming languages (Python, Java, Swift, Bash, C++, Node.js)
- **Projects**: Real GitHub repositories with filtering by category
- **Contact**: Functional contact form with database integration

### Technical Features
- **Contact Form**: Backend integration with form submission and validation
- **Database Storage**: PostgreSQL integration for contact submissions
- **Authentication Ready**: Express session management setup
- **API Endpoints**: RESTful contact submission API
- **Type Safety**: Full TypeScript implementation throughout

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Framer Motion** - Animation library for smooth transitions
- **React Query** - Server state management
- **Wouter** - Lightweight client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe backend development
- **Drizzle ORM** - Type-safe database toolkit
- **PostgreSQL** - Relational database
- **Zod** - Schema validation

### Development Tools
- **ESBuild** - Fast JavaScript bundler
- **PostCSS** - CSS processing
- **Drizzle Kit** - Database migrations
- **tsx** - TypeScript execution for Node.js

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (for contact form functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/portfolio
   NODE_ENV=development
   ```

4. **Database Setup**
   ```bash
   npm run db:push
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # shadcn/ui components
│   │   │   ├── navigation.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── achievements-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   └── footer.tsx
│   │   ├── pages/         # Route components
│   │   ├── lib/           # Utilities and animations
│   │   ├── hooks/         # Custom React hooks
│   │   └── providers/     # Context providers
│   └── index.html
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Database interface
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schema and types
└── README.md
```

## 🎨 Glass UI Components

The portfolio features custom glassmorphism components:

- **`.glass`** - Standard glass effect with blur and transparency
- **`.glass-light`** - Light theme optimized glass effect
- **`.glass-dark`** - Dark theme optimized glass effect
- **`.glass-card`** - Card components with glass styling
- **`.glass-nav`** - Navigation specific glass effect

## 📊 Portfolio Data

All portfolio content uses authentic data:
- **GitHub Profile**: Real follower count, repository data, and achievements
- **Professional Experience**: Cybersecurity focus with IIT education background
- **Skills**: Actual programming languages and security tools
- **Projects**: Live GitHub repositories with authentic descriptions

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Database
npm run db:push      # Push schema changes
npm run db:generate  # Generate migrations
npm run db:migrate   # Run migrations
```

## 🌐 Deployment

### Environment Variables Required
- `DATABASE_URL` - PostgreSQL connection string
- `NODE_ENV` - Environment mode (production/development)

### Deployment Platforms
- **Replit Deployments** - Recommended (built-in support)
- **Vercel** - Frontend with separate backend deployment
- **Railway** - Full-stack deployment with PostgreSQL

## 📧 Contact Integration

The contact form integrates with:
- PostgreSQL database for message storage
- Form validation using Zod schemas
- Success/error toast notifications
- Responsive design with glass styling

## 🎯 Professional Focus

**Farazul Hoda (MR. BiNARY)**
- **Cybersecurity Professional** specializing in vulnerability management
- **System Administrator** with DevSecOps expertise
- **Network Security** and incident detection specialist
- **Master's in Computer Science** from Illinois Institute of Technology

## 📱 Contact Information

- **Email**: imfaraz730@outlook.com
- **LinkedIn**: [farazul-hoda](https://www.linkedin.com/in/farazul-hoda)
- **GitHub**: [farazulhoda](https://github.com/farazulhoda)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **GitHub Arctic Code Vault** contributor
- **shadcn/ui** for beautiful component library
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Illinois Institute of Technology** for academic foundation

---

Built with ❤️ by Farazul Hoda - Cybersecurity Professional & Developer
