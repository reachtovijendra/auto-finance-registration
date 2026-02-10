import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { RegistrationLayoutComponent } from '../../../shared/components/registration-layout/registration-layout.component';

export interface AccountReview {
  accountNumber: string;
  email: string;
  vehicleYear: number;
  vehicleMake: string;
  vehicleModel: string;
  accountBalance: number;
  interestRate: number;
  customerRole: 'Borrower' | 'Co-Borrower';
}

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [
    CurrencyPipe,
    ButtonModule,
    DividerModule,
    TagModule,
    RegistrationLayoutComponent,
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
})
export class ReviewComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  account!: AccountReview;

  ngOnInit(): void {
    const params = this.route.snapshot.queryParamMap;
    const accountNumber = params.get('accountNumber') ?? '987654321';

    // Hardcoded static data for now. Will be fetched from API in the future.
    this.account = {
      accountNumber,
      email: 'john.doe@email.com',
      vehicleYear: 2025,
      vehicleMake: 'Honda',
      vehicleModel: 'Civic',
      accountBalance: 18750.0,
      interestRate: 6.49,
      customerRole: 'Borrower',
    };
  }

  get vehicleDisplay(): string {
    return `${this.account.vehicleYear} ${this.account.vehicleMake} ${this.account.vehicleModel}`;
  }

  get maskedAccount(): string {
    const acct = this.account.accountNumber;
    if (acct.length <= 4) return acct;
    return '****' + acct.slice(-4);
  }

  onConfirm(): void {
    this.router.navigate(['../done'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }

}
