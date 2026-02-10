import {
  Component,
  inject,
  AfterViewInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RegistrationLayoutComponent } from '../../../shared/components/registration-layout/registration-layout.component';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-done',
  standalone: true,
  imports: [ButtonModule, RegistrationLayoutComponent],
  templateUrl: './done.component.html',
  styleUrl: './done.component.scss',
})
export class DoneComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.launchConfetti();
    }
  }

  onLogin(): void {
    // Placeholder: navigate to the login page.
    // In the future this will route to the actual login URL.
    console.log('Navigating to login...');
  }

  private launchConfetti(): void {
    // ACA brand colors for confetti: navy, red, white, blue accent
    const acaColors = ['#002855', '#C41230', '#ffffff', '#1157a7', '#c9a84c'];

    // Initial burst from center
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: acaColors,
      disableForReducedMotion: true,
    });

    // Delayed side bursts for a richer effect
    setTimeout(() => {
      confetti({
        particleCount: 40,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.65 },
        colors: acaColors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 40,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.65 },
        colors: acaColors,
        disableForReducedMotion: true,
      });
    }, 300);
  }
}
