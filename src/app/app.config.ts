import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';

const AcaPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#e6edf5',
      100: '#b3c8de',
      200: '#80a3c7',
      300: '#4d7eb0',
      400: '#1a5999',
      500: '#1157a7',
      600: '#002855',
      700: '#002048',
      800: '#00183a',
      900: '#00102d',
      950: '#000820',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#002855',
          inverseColor: '#ffffff',
          hoverColor: '#00183a',
          activeColor: '#00102d',
        },
        highlight: {
          background: '#002855',
          focusBackground: '#00183a',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
      dark: {
        primary: {
          color: '#93b5e0',
          inverseColor: '#002855',
          hoverColor: '#afc9ea',
          activeColor: '#c7daf0',
        },
        highlight: {
          background: 'rgba(147, 181, 224, 0.16)',
          focusBackground: 'rgba(147, 181, 224, 0.24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
      },
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: AcaPreset,
        options: {
          darkModeSelector: '.app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'primeng',
          },
        },
      },
    }),
  ],
};
