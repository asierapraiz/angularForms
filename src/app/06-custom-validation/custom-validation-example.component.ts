import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { passwordValidator } from './validators';

@Component({
  selector: 'app-custom-validation-example',
  templateUrl: './custom-validation-example.component.html'
})
export class CustomValidationExampleComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.minLength(6), passwordValidator]]
    });
  }

  get password() {
    return this.form.controls.password;
  }

  submit() {
    console.log(this.form.value);
  }
}
