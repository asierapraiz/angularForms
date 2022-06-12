import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AdvancedFormTypesExampleComponent } from './advanced-form-types-example.component';

const routes: Routes = [
  { path: '', component: AdvancedFormTypesExampleComponent }
];

@NgModule({
  declarations: [AdvancedFormTypesExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdvancedFormTypesExampleModule { }
