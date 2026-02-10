import { Routes } from '@angular/router';

export const REGISTRATION_ROUTES: Routes = [
  {
    path: 'welcome',
    loadComponent: () =>
      import('./welcome/welcome.component').then((m) => m.WelcomeComponent),
  },
  {
    path: 'verify',
    loadComponent: () =>
      import('./verify/verify.component').then((m) => m.VerifyComponent),
  },
  {
    path: 'details',
    loadComponent: () =>
      import('./details/details.component').then((m) => m.DetailsComponent),
  },
  {
    path: 'review',
    loadComponent: () =>
      import('./review/review.component').then((m) => m.ReviewComponent),
  },
  {
    path: 'done',
    loadComponent: () =>
      import('./done/done.component').then((m) => m.DoneComponent),
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
];
