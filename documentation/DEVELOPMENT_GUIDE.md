# Customer Portal V3 UI - Development Guide

## Prerequisites

- Node.js 20.x or later
- npm 10.x or later

## Getting Started

### Installation

```bash
cd customerportalv3ui
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload when source files change.

### Build

```bash
npm run build
```

Build artifacts are stored in the `dist/` directory.

### Testing Welcome Screen with URL Parameters

The welcome screen reads `firstName` and `accountNumber` from URL query parameters:

```
http://localhost:4200/registration/welcome?firstName=John&accountNumber=123456789
```

If no parameters are provided, the screen defaults to "Valued Customer" as the name.

## Project Conventions

### File Structure

- **Features**: `src/app/features/<feature-name>/`
- **Shared Components**: `src/app/shared/components/<component-name>/`
- **Core Services**: `src/app/core/services/`
- **Environments**: `src/environments/`

### Component Naming

- Standalone components only (no NgModules)
- Component files: `<name>.component.ts`, `<name>.component.html`, `<name>.component.scss`
- Feature routes: `<feature>.routes.ts`

### Styling

- PrimeNG design tokens preferred over custom CSS
- SCSS for component-specific styles
- Global styles in `src/styles.scss`
- Dark mode uses `.app-dark` class on `<html>` element

### UI Components

PrimeNG is the designated UI component library. Use PrimeNG components instead of building custom equivalents.
