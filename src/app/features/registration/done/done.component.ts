import {
  Component,
  inject,
  OnInit,
  AfterViewInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
export class DoneComponent implements OnInit, AfterViewInit {
  private readonly route = inject(ActivatedRoute);
  private readonly platformId = inject(PLATFORM_ID);

  email: string = '';

  ngOnInit(): void {
    // Hardcoded for now. In the future, this will come from the registration state.
    this.email = 'john.doe@email.com';
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.launchConfetti();
    }
  }

  get maskedEmail(): string {
    const [localPart, domain] = this.email.split('@');
    if (!domain || localPart.length <= 2) {
      return this.email;
    }
    const visible = localPart.slice(0, 2);
    const masked = '*'.repeat(Math.min(localPart.length - 2, 6));
    return `${visible}${masked}@${domain}`;
  }

  onLogin(): void {
    // Placeholder: navigate to the login page.
    // In the future this will route to the actual login URL.
    console.log('Navigating to login...');
  }

  private launchConfetti(): void {
    // Initial burst from center
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      disableForReducedMotion: true,
    });

    // Delayed side bursts for a richer effect
    setTimeout(() => {
      confetti({
        particleCount: 40,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.65 },
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 40,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.65 },
        disableForReducedMotion: true,
      });
    }, 300);
  }
}
