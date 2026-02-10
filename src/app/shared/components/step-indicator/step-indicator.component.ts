import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-step-indicator',
  standalone: true,
  imports: [],
  templateUrl: './step-indicator.component.html',
  styleUrl: './step-indicator.component.scss',
})
export class StepIndicatorComponent {
  readonly currentStep = input<number>(1);
  readonly totalSteps = input<number>(4);

  readonly progressPercent = computed(() => {
    const total = this.totalSteps();
    const current = this.currentStep();
    if (total <= 1) return 100;
    return Math.round(((current - 1) / (total - 1)) * 100);
  });
}
