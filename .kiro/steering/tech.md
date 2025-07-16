# Technology Stack

## Framework & Runtime
- **Next.js 15.1.6** - React framework with App Router
- **React 19** - UI library with latest features
- **Node.js** - Runtime environment

## Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **CSS Custom Properties** - For theming (background, foreground variables)
- **PostCSS** - CSS processing

## Animations & Interactions
- **GSAP 3.13.0** - Professional animation library
- **Lottie React 2.4.1** - JSON-based animations
- **Motion 12.23.3** - React animation library
- **Embla Carousel** - Touch-friendly carousel component

## Icons & Assets
- **Heroicons** - SVG icon library
- **Lucide React** - Icon components
- **React Icons** - Popular icon packs

## Development Tools
- **TypeScript** - Type safety (mixed JS/TS project)
- **ESLint** - Code linting with Next.js config
- **Strict mode disabled** - Flexible TypeScript configuration

## Common Commands

```bash
# Development
npm run dev          # Start development server on localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint checks
```

## Build Configuration
- **Target**: ES2017
- **Module system**: ESNext with Node resolution
- **Path aliases**: `@/*` maps to `./src/*`
- **Mixed JS/TS**: Both .js and .tsx files supported