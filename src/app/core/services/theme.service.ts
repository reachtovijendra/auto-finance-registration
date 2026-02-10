import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const THEME_KEY = 'app-theme-preference';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  /** true = dark mode, false = light mode */
  readonly isDark = signal<boolean>(this.resolveInitialTheme());

  constructor() {
    effect(() => {
      this.applyTheme(this.isDark());
    });
  }

  toggle(): void {
    this.isDark.update((dark) => !dark);
  }

  private resolveInitialTheme(): boolean {
    if (!this.isBrowser) {
      return false;
    }

    const stored = localStorage.getItem(THEME_KEY);
    if (stored !== null) {
      return stored === 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private applyTheme(dark: boolean): void {
    if (!this.isBrowser) {
      return;
    }

    const root = document.documentElement;
    if (dark) {
      root.classList.add('app-dark');
    } else {
      root.classList.remove('app-dark');
    }

    localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
  }
}
