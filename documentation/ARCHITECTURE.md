# Customer Portal V3 UI - Architecture

## Overview

Customer Portal V3 UI is an Angular single-page application (SPA) that provides a registration flow for American Credit Acceptance customers. It communicates with the existing Customer Portal V2 API (.NET/C#) which remains unchanged.

## Technology Stack

| Technology | Version | Purpose |
|---|---|---|
| Angular | 21.x | Application framework |
| PrimeNG | 21.x | UI component library |
| PrimeIcons | 7.x | Icon library |
| TypeScript | 5.9.x | Language |
| SCSS | - | Styling preprocessor |
| RxJS | 7.8.x | Reactive programming |
| canvas-confetti | 1.x | Confetti celebration animation |

## Project Structure

```
customerportalv3ui/
  src/
    app/
      app.ts                              # Root component
      app.html                            # Root template (header + router outlet)
      app.scss                            # Root styles
      app.config.ts                       # Application providers (PrimeNG, routing, animations)
      app.routes.ts                       # Top-level route definitions
      core/
        services/
          theme.service.ts                # Dark/light mode toggle service
      features/
        registration/
          registration.routes.ts          # Registration child routes (lazy-loaded)
          welcome/
            welcome.component.ts          # Screen 1: Welcome
            welcome.component.html
            welcome.component.scss
          verify/
            verify.component.ts           # Screen 2: Identity Verification (SSN last 4)
            verify.component.html
            verify.component.scss
          details/
            details.component.ts          # Screen 3: Account Details (email + password)
            details.component.html
            details.component.scss
          review/
            review.component.ts           # Screen 4: Review Account Information
            review.component.html
            review.component.scss
          done/
            done.component.ts             # Screen 5: Registration Complete (confetti + email verify)
            done.component.html
            done.component.scss
      shared/
        components/
          header/
            header.component.ts           # Application header with logo and theme toggle
            header.component.html
            header.component.scss
          step-indicator/
            step-indicator.component.ts   # Reusable 5-step progress indicator
            step-indicator.component.html
            step-indicator.component.scss
          registration-layout/
            registration-layout.component.ts   # Shared card layout for registration screens
            registration-layout.component.html
            registration-layout.component.scss
    assets/
      images/                             # Static image assets
    environments/
      environment.ts                      # Default environment configuration
      environment.development.ts          # Local development configuration
    index.html                            # HTML entry point
    main.ts                               # Application bootstrap
    styles.scss                           # Global styles
```

## Design Decisions

### Standalone Components
All components use the Angular standalone pattern (no NgModules). This reduces boilerplate and improves tree-shaking.

### Lazy Loading
Feature modules (registration) are lazy-loaded via `loadChildren` for optimal initial bundle size.

### PrimeNG Theming
The application uses PrimeNG's Aura preset customized with ACA brand colors. Dark mode is implemented via the `.app-dark` CSS class on the `<html>` element, which PrimeNG respects for design token switching.

### State Management
Service-based state management using Angular signals. No external state library is used at this stage.

## API Integration

The application is designed to consume the existing Customer Portal V2 API. The base API URL is configured per environment:

- **Local**: `https://localhost:44319/api`
- **Dev**: `https://customerportalapi.dev.svc.acacceptance.com/api`

Currently, no API calls are made. All data is static/hardcoded for the initial UI build.

## Theming

The application supports light and dark modes. Theme preference is:
1. Loaded from `localStorage` on startup
2. Falls back to the system `prefers-color-scheme` media query
3. Toggleable via the header switch
4. Persisted to `localStorage` on change
