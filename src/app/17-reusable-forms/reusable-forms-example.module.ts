import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReusableFormsExampleComponent } from './reusable-forms-example.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

const routes: Routes = [
  { path: '', component: ReusableFormsExampleComponent }
];

@NgModule({
  declarations: [
    ReusableFormsExampleComponent,
    PasswordFormComponent,
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class ReusableFormsExampleModule { }
