import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormControlExampleComponent } from './form-control-example.component';

const routes: Routes = [
  { path: '', component: FormControlExampleComponent }
];

@NgModule({
  declarations: [FormControlExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FormControlExampleModule { }
