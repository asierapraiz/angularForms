import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormArrayExampleComponent } from './form-array-example.component';

const routes: Routes = [
  { path: '', component: FormArrayExampleComponent }
];

@NgModule({
  declarations: [FormArrayExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FormArrayExampleModule { }
