import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

export interface RegistrationStep {
  number: number;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-step-indicator',
  standalone: true,
  imports: [NgClass],
  templateUrl: './step-indicator.component.html',
  styleUrl: './step-indicator.component.scss',
})
export class StepIndicatorComponent {
  readonly currentStep = input<number>(1);

  readonly steps: RegistrationStep[] = [
    { number: 1, label: 'Welcome', icon: 'pi pi-car' },
    { number: 2, label: 'Verify', icon: 'pi pi-shield' },
    { number: 3, label: 'Details', icon: 'pi pi-user' },
    { number: 4, label: 'Review', icon: 'pi pi-clipboard' },
    { number: 5, label: 'Done', icon: 'pi pi-check-circle' },
  ];
}
