import { Routes, RouterModule } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

const routes: Routes = [
  {
    path: "",
    component: AutocompleteComponent,
    children: [
      {
        path: "autocomplete",
        component: AutocompleteComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'autocomplete'
      }
    ]
  },
];

export const ComponentsRoutes = RouterModule.forChild(routes);
