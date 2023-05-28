import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      // {
      //   path: '',

      //   loadChildren: () =>
      //     import('../test/test.module').then((m) => m.TestModule),
      // },
      // {
      //   path: 'secondtest',
      //   loadChildren: () =>
      //     import('../secondtest/secondtest.module').then(
      //       (m) => m.SecondtestModule
      //     ),
      // },
      {
        path: '',
        loadChildren: () =>
          import('../secondtest/secondtest.module').then(
            (m) => m.SecondtestModule
          ),
      },
    ],
  },
];
