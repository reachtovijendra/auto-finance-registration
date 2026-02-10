import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RegistrationLayoutComponent } from '../../../shared/components/registration-layout/registration-layout.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [FormsModule, ButtonModule, CheckboxModule, RegistrationLayoutComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly firstName = signal<string>('');
  readonly accountNumber = signal<string>('');

  termsAccepted: boolean = false;

  ngOnInit(): void {
    const params = this.route.snapshot.queryParamMap;
    this.firstName.set(params.get('firstName') ?? 'Valued Customer');
    this.accountNumber.set(params.get('accountNumber') ?? '');
  }

  onGetStarted(): void {
    this.router.navigate(['../verify'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
