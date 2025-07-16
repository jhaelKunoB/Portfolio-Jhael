# Project Structure

## Root Directory
```
portfolio-jhael/
├── src/                 # Source code
├── public/              # Static assets
├── .kiro/               # Kiro configuration
├── .next/               # Next.js build output
├── node_modules/        # Dependencies
└── config files         # Various config files
```

## Source Organization (`src/`)
```
src/
├── app/                 # Next.js App Router
│   ├── module/          # Feature modules
│   ├── layout.js        # Root layout
│   ├── page.js          # Home page
│   └── globals.css      # Global styles
├── components/          # Reusable UI components
│   ├── AnimatedText.tsx # Text animations
│   ├── background-beams.jsx
│   ├── pointer-highlight.jsx
│   └── sticky-scroll-reveal.jsx
└── libs/                # Utility libraries
    └── utils.ts         # Helper functions
```

## Public Assets (`public/`)
```
public/
├── animations/          # Lottie JSON files
├── images/              # General images
│   ├── proyects/        # Project screenshots
│   └── TechnologyIcons/ # Tech stack icons
├── imagesTec/           # Technology logos
├── *.svg               # Icon files
└── Jhael-Kuno-CV.pdf   # Resume/CV
```

## Naming Conventions
- **Components**: PascalCase (e.g., `AnimatedText.tsx`)
- **Files**: kebab-case for utilities (e.g., `background-beams.jsx`)
- **Folders**: camelCase for features, lowercase for standard directories
- **Assets**: Descriptive names, organized by type

## File Extensions
- **React Components**: `.tsx` for TypeScript, `.jsx` for JavaScript
- **Pages**: `.js` (Next.js App Router)
- **Utilities**: `.ts` for TypeScript
- **Styles**: `.css` for stylesheets

## Path Aliases
- `@/*` → `./src/*`
- `@/components/*` → `./src/components/*`
- `@/libs/*` → `./src/libs/*`

## Architecture Patterns
- **App Router**: Next.js 13+ file-based routing
- **Component-based**: Modular, reusable UI components
- **Mixed JS/TS**: Gradual TypeScript adoption
- **Asset organization**: Categorized by type and purpose