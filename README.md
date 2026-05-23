# Kirill — Developer Portfolio

A responsive, high-performance premium developer landing page for full-stack engineer Kirill, designed as a polished product experience.

## Tech Stack

- **Client Framework**: React 19 (Vite Single Page Application)
- **Styling**: Tailwind CSS v4 (with fluid utility layout pairs)
- **Interactions & Animations**: motion (Framer Motion v12) for graceful display transitions and active window tabs
- **Icons**: Lucide React
- **Type Safety**: TypeScript

---

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

Install development and production dependencies:

```bash
npm install
```

### Run Local Development Server

Start the local server matching sandbox ingress rules:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### Building for Production

Compile typescript elements and build optimized static assets:

```bash
npm run build
```

The static files will be exported to the `dist/` directory, ready to serve or upload.

---

## Deployment to Vercel / Netlify

This project builds as a standard client-side React SPA app through Vite.

1. Connect the repository or upload files via CLI.
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy. No environment variables are strictly required to show the portfolio container.
