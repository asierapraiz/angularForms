import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  { path: '01-html-forms', loadChildren: () => import('./01-html-forms/html-forms-example.module').then(m => m.HtmlFormsExampleModule) },
  { path: '02-form-control', loadChildren: () => import('./02-form-control/form-control-example.module').then(m => m.FormControlExampleModule) },
  { path: '03-input-validation', loadChildren: () => import('./03-input-validation/input-validation-example.module').then(m => m.InputValidationExampleModule) },
  { path: '04-form-group', loadChildren: () => import('./04-form-group/form-group-example.module').then(m => m.FormGroupExampleModule) },
  { path: '05-form-builder', loadChildren: () => import('./05-form-builder/form-builder-example.module').then(m => m.FormBuilderExampleModule) },
  { path: '06-custom-validation', loadChildren: () => import('./06-custom-validation/custom-validation-example.module').then(m => m.CustomValidationExampleModule) },
  { path: '07-form-group-validation', loadChildren: () => import('./07-form-group-validation/form-group-validation-example.module').then(m => m.FormGroupValidationExampleModule) },
  { path: '08-advanced-form-types', loadChildren: () => import('./08-advanced-form-types/advanced-form-types-example.module').then(m => m.AdvancedFormTypesExampleModule) },
  { path: '09-accessibility', loadChildren: () => import('./09-accessibility/accessibility-example.module').then(m => m.AccessibilityExampleModule) },
  { path: '10-forms-with-async-data', loadChildren: () => import('./10-forms-with-async-data/forms-with-async-data-example.module').then(m => m.FormsWithAsyncDataExampleModule) },
  { path: '11-dynamic-form-controls', loadChildren: () => import('./11-dynamic-form-controls/dynamic-form-controls-example.module').then(m => m.DynamicFormControlsExampleModule) },
  { path: '12-form-array', loadChildren: () => import('./12-form-array/form-array-example.module').then(m => m.FormArrayExampleModule) },
  { path: '13-async-validation', loadChildren: () => import('./13-async-validation/async-validation-example.module').then(m => m.AsyncValidationExampleModule) },
  { path: '14-template-forms', loadChildren: () => import('./14-template-forms/template-forms-example.module').then(m => m.TemplateFormsExampleModule) },
  { path: '15-custom-form-controls', loadChildren: () => import('./15-custom-form-controls/custom-form-controls-example.module').then(m => m.CustomFormControlsExampleModule) },
  { path: '16-reactive-search', loadChildren: () => import('./16-reactive-search/reactive-search-example.module').then(m => m.ReactiveSearchExampleModule) },
  { path: '17-reusable-forms', loadChildren: () => import('./17-reusable-forms/reusable-forms-example.module').then(m => m.ReusableFormsExampleModule) },
  {
    path: '18-advanced-validation-management',
    loadChildren: () => import('./18-advanced-validation-management/advanced-validation-management-example.module').then(m => m.AdvanceValidationManagementExampleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
