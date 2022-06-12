import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ValidationService } from './validation.service';

@Component({
  selector: 'app-advanced-validation-management-example',
  templateUrl: './advanced-validation-management-example.component.html'
})
export class AdvancedValidationManagementExampleComponent {
  userForm: any;

  constructor(private formBuilder: FormBuilder) {

    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      profile: ['', [Validators.required, Validators.minLength(10)]]
    });

    console.log(this.userForm);
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
  }
}
