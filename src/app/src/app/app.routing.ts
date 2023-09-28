import {Routes} from '@angular/router';

export const appRouting: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/landing/landing.component').then(c => c.LandingComponent),
  },
  {
    path: 'docs',
    loadChildren: () => import('./pages/docs/docs.routing').then(c => c.docsRouting),
  },
  {
    path: '**',
    redirectTo: 'docs/start',
  },
];
