import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CustomFormControlsExampleComponent } from './custom-form-controls-example.component';
import { SwitchComponent } from './switch/switch.component';

const routes: Routes = [
  { path: '', component: CustomFormControlsExampleComponent }
];

@NgModule({
  declarations: [
    CustomFormControlsExampleComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomFormControlsExampleModule { }
