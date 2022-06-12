import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormControlsExampleComponent } from './dynamic-form-controls-example.component';

const routes: Routes = [
  { path: '', component: DynamicFormControlsExampleComponent }
];

@NgModule({
  declarations: [DynamicFormControlsExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DynamicFormControlsExampleModule { }
