import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormGroupValidationExampleComponent } from './form-group-validation-example.component';

const routes: Routes = [
  { path: '', component: FormGroupValidationExampleComponent }
];

@NgModule({
  declarations: [FormGroupValidationExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FormGroupValidationExampleModule { }
