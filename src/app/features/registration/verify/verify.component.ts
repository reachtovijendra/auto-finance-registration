import { Component, inject, signal } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';
import { RegistrationLayoutComponent } from '../../../shared/components/registration-layout/registration-layout.component';

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    InputOtpModule,
    RegistrationLayoutComponent,
  ],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss',
})
export class VerifyComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  ssnLastFour: string | null = null;
  readonly isInvalid = signal(false);
  readonly errorMessage = signal('');

  get isValid(): boolean {
    return this.ssnLastFour !== null && this.ssnLastFour.length === 4;
  }

  onVerify(): void {
    if (!this.isValid) {
      this.isInvalid.set(true);
      this.errorMessage.set('Please enter the last 4 digits of your Social Security Number.');
      return;
    }

    this.isInvalid.set(false);
    this.errorMessage.set('');

    // Static verification: accept any 4-digit input for now
    this.router.navigate(['../details'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }

}
