import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'gridstack-example',
    loadComponent: () =>
      import('./gridstack-example/gridstack-example.component').then(
        (m) => m.GridstackExampleComponent,
      ),
  },
  {
    path: 'not-authorized',
    component: NotAuthorizedComponent,
    title: 'Not Authorized',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not found',
  },
];
