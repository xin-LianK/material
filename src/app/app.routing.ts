import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'components',
    pathMatch: 'full',
  },
  {
    path: "components",
    loadChildren: "./components/components.module#ComponentsModule"
  },
];

export const AppRoutes = RouterModule.forRoot(routes);
