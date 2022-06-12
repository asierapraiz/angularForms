import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { InputValidationExampleComponent } from './input-validation-example.component';

const routes: Routes = [
  { path: '', component: InputValidationExampleComponent }
];

@NgModule({
  declarations: [InputValidationExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class InputValidationExampleModule { }
