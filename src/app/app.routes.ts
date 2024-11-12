import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: '',
  //       component: LandingPageComponent,
  //     },
  //   ],
  // },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        //path: 'game',
        path: '',
        loadComponent: () =>
          import('./game/pages/game-page/game-page.component').then(
            (m) => m.GamePageComponent
          ),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
