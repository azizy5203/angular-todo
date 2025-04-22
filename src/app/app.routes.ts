// import { TasksListComponent } from './tasks-list/tasks-list.component';
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
    path: 'tasks',
    loadComponent: () =>
      import('./tasks-list/tasks-list.component').then(
        (m) => m.TasksListComponent,
      ),
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./tabs/tabs.component').then((m) => m.TabsComponent),
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
