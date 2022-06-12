import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AsyncValidationExampleComponent } from './async-validation-example.component';
import { UsernameService } from './username.service';

const routes: Routes = [
  { path: '', component: AsyncValidationExampleComponent }
];

@NgModule({
  declarations: [AsyncValidationExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [UsernameService]
})
export class AsyncValidationExampleModule { }
