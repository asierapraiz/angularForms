import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsWithAsyncDataExampleComponent } from './forms-with-async-data-example.component';

const routes: Routes = [
  { path: '', component: FormsWithAsyncDataExampleComponent }
];

@NgModule({
  declarations: [FormsWithAsyncDataExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FormsWithAsyncDataExampleModule { }
