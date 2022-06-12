import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormGroupExampleComponent } from './form-group-example.component';

const routes: Routes = [
  { path: '', component: FormGroupExampleComponent }
];

@NgModule({
  declarations: [FormGroupExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FormGroupExampleModule { }
