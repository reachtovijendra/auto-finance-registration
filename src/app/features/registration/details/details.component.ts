import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RegistrationLayoutComponent } from '../../../shared/components/registration-layout/registration-layout.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    FloatLabelModule,
    RegistrationLayoutComponent,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit, AfterViewInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  /** Email pre-populated from API based on account number (hardcoded for now). User can edit. */
  email: string = '';

  /** Password entered by the user */
  password: string = '';

  ngOnInit(): void {
    // In the future, this will be fetched from the API using the accountNumber query param.
    // For now, hardcode a static email address.
    this.email = 'john.doe@email.com';
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const passwordInput = document.getElementById('password');
      if (passwordInput) {
        passwordInput.focus();
      }
    });
  }

  get isValid(): boolean {
    return this.email.trim().length > 0 && this.password.length > 0;
  }

  onContinue(): void {
    if (!this.isValid) {
      return;
    }

    this.router.navigate(['../review'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }

}
