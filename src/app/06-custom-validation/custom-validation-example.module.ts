import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomValidationExampleComponent } from './custom-validation-example.component';

const routes: Routes = [
  { path: '', component: CustomValidationExampleComponent }
];

@NgModule({
  declarations: [CustomValidationExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomValidationExampleModule { }
