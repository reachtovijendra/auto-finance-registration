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

  /** Whether the API had an email on file for this account */
  emailOnFile: boolean = false;

  ngOnInit(): void {
    // In the future, this will be fetched from the API using the accountNumber query param.
    // Simulate: API returned an email for this account.
    // Set to false to simulate a customer with no email on file.
    const apiEmail = 'john.doe@email.com'; // Replace with API call result (or empty string if none)

    if (apiEmail) {
      this.email = apiEmail;
      this.emailOnFile = true;
    } else {
      this.email = '';
      this.emailOnFile = false;
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const focusTarget = this.emailOnFile ? 'password' : 'email';
      const el = document.getElementById(focusTarget);
      if (el) {
        el.focus();
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

    // Merge emailOnFile flag into existing query params
    const currentParams = this.route.snapshot.queryParams;
    this.router.navigate(['../review'], {
      relativeTo: this.route,
      queryParams: { ...currentParams, emailOnFile: this.emailOnFile },
    });
  }

}
