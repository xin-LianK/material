import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutes } from './components.routing';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutes
  ],
  declarations: [
    ComponentsComponent,
    AutocompleteComponent
]
})
export class ComponentsModule { }