import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder-example',
  templateUrl: './form-builder-example.component.html'
})
export class FormBuilderExampleComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: [],
      lastName: [],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get email() {
    return this.form.controls.email;
  }

  submit() {
    console.log(this.form.value);
  }
}
