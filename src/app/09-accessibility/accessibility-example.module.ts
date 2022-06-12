import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AccessibilityExampleComponent } from './accessibility-example.component';

const routes: Routes = [
  { path: '', component: AccessibilityExampleComponent }
];

@NgModule({
  declarations: [AccessibilityExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AccessibilityExampleModule { }
