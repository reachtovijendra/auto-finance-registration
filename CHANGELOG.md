# Changelog

All notable changes to the Customer Portal V3 UI project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial project scaffold with Angular 21, PrimeNG 21, and PrimeIcons
- PrimeNG Aura theme with ACA brand colors (primary: #002855)
- Dark mode / light mode toggle with localStorage persistence and system preference detection
- Shared header component with ACA logo and theme toggle switch
- Registration feature module with lazy-loaded routing
- Welcome screen (Screen 1 of 5) that reads `firstName` and `accountNumber` from URL query parameters
- Personalized welcome greeting with step indicator for the 5-screen registration flow
- Terms & Conditions checkbox on Welcome screen; "Get Started" button disabled until accepted
- Terms & Conditions link opens ACA legal page in a new browser tab
- Shared registration layout now supports a `[terms]` content projection slot between steps and actions
- Verification screen (Screen 2 of 5) with masked 4-digit SSN input using PrimeNG InputOtp
- Account Details screen (Screen 3 of 5) with read-only email field and password creation using PrimeNG Password with toggle mask
- Navigation from Verify to Details screen on successful SSN entry
- Shared step indicator component with completed/active/pending states and checkmark icons
- Shared registration layout component for consistent card container across all registration screens
- Review screen (Screen 4 of 5) with creative card-based layout displaying account details
- Vehicle hero card with make, model, and year displayed prominently
- Account information rows with icons for account number (masked), email, balance, interest rate, and customer role
- PrimeNG Tag component to visually distinguish Borrower vs Co-Borrower roles
- Currency formatting for account balance using Angular CurrencyPipe
- Navigation from Details to Review screen on form submission
- Back navigation from Review to Details
- Done screen (Screen 5 of 5) with success message, confetti celebration animation, email verification notice, and login button
- canvas-confetti library for celebratory confetti burst on registration completion
- Masked email display on Done screen for privacy
- Navigation from Review to Done screen on account confirmation
- Navigation flow from Welcome to Verify with query parameter preservation
- Back navigation from Verify to Welcome
- Global styles with Inter font, responsive typography, and smooth dark/light mode transitions
- Environment configuration files for development and default environments

### Changed
- Complete visual redesign of registration UI with ACA brand identity
- Added navy blue hero banner with gradient background and subtle geometric pattern overlay
- Registration card now overlaps the hero banner for a modern, layered visual effect
- Header redesigned with navy blue background and white-inverted ACA logo
- ACA brand CSS custom properties added: `--aca-navy`, `--aca-red`, `--aca-blue-accent`, `--aca-gold`, `--aca-off-white`
- Step indicator enhanced with border/glow effects for active step and ACA navy color scheme
- All screen badges redesigned with gradient navy-to-blue rounded squares replacing plain circles
- "Terms & Conditions" link color changed to ACA red (`#C41230`) for visual emphasis
- Vehicle hero card on Review screen uses navy gradient background
- Email notice card on Done screen uses left-border accent in ACA navy
- Done screen success badge uses green gradient with box shadow
- Confetti animation now uses ACA brand colors: navy, red, white, blue, and gold
- Dark mode fully updated for all new design elements including hero banner, badges, and accent colors
- Reduced whitespace and tightened spacing across all screens
- Card shadow enhanced with navy-tinted depth shadow for visual cohesion
- Background color changed from PrimeNG surface-ground to ACA off-white (`#f4f6f9`)
- Responsive breakpoints refined for 4 tiers: desktop (1280px+), tablet (768px), mobile (576px), small phone (360px/320px)

### Fixed
- Registration card not centering horizontally on wide monitors and multi-monitor setups
- Ensured full-width propagation through the entire component hierarchy: `html`/`body` -> `app-root` -> `.app-main` -> routed components
- Added `width: 100%` to root component host, main container, and routed component wrappers for consistent centering across all viewport sizes (320px to 2560px+)
