import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdvancedValidationManagementExampleComponent } from './advanced-validation-management-example.component';
import { ValidationMessageComponent } from './validation-message.component';

const routes: Routes = [
  { path: '', component: AdvancedValidationManagementExampleComponent }
];

@NgModule({
  declarations: [
    AdvancedValidationManagementExampleComponent,
    ValidationMessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class AdvanceValidationManagementExampleModule { }
