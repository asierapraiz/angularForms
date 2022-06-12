import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormBuilderExampleComponent } from './form-builder-example.component';

const routes: Routes = [
  { path: '', component: FormBuilderExampleComponent }
];

@NgModule({
  declarations: [FormBuilderExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FormBuilderExampleModule { }
