import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HtmlFormsExampleComponent } from './html-forms-example.component';

const routes: Routes = [
  { path: '', component: HtmlFormsExampleComponent }
];

@NgModule({
  declarations: [HtmlFormsExampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HtmlFormsExampleModule { }
