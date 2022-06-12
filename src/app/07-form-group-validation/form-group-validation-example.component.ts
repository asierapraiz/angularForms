import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { matchingInputsValidator } from './validators';

@Component({
  selector: 'app-form-group-validation-example',
  templateUrl: './form-group-validation-example.component.html'
})
export class FormGroupValidationExampleComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', Validators.required]
    }, { validator: matchingInputsValidator('password', 'confirm') });
  }

  submit() {
    console.log(this.form.value);
  }

  get passwordIsInvalid() {
    return this.form.controls.password.invalid && this.form.controls.password.touched;
  }

  get passwordsDoNotMatch() {
    return this.form.errors?.mismatch && this.form.controls.confirm.touched;
  }
}
