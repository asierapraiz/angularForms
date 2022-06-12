import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveSearchExampleComponent } from './reactive-search-example.component';

const routes: Routes = [
  { path: '', component: ReactiveSearchExampleComponent }
];

@NgModule({
  declarations: [
    ReactiveSearchExampleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class ReactiveSearchExampleModule { }
