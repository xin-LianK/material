import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutes } from './components.routing';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ShareModule } from '../share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutes,
    FormsModule,
    ReactiveFormsModule,
    ShareModule
  ],
  declarations: [
    ComponentsComponent,
    AutocompleteComponent
  ]
})
export class ComponentsModule { }