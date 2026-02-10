import { Component, input } from '@angular/core';
import { StepIndicatorComponent } from '../step-indicator/step-indicator.component';

@Component({
  selector: 'app-registration-layout',
  standalone: true,
  imports: [StepIndicatorComponent],
  templateUrl: './registration-layout.component.html',
  styleUrl: './registration-layout.component.scss',
})
export class RegistrationLayoutComponent {
  readonly currentStep = input<number>(1);
  readonly totalSteps = input<number>(4);
  readonly showProgress = input<boolean>(true);
}
