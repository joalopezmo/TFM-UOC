import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'todo',
    loadChildren: () => import('todo/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'about',
    loadChildren: () => import('about/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('reports/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
