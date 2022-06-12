import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-form-controls-example',
  templateUrl: './custom-form-controls-example.component.html'
})
export class CustomFormControlsExampleComponent {
  myForm: FormGroup
  value = false;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      mySwitch: [true]
    });
  }

  submit() {
    alert(`Value: ${this.myForm.controls.mySwitch.value}`);
    console.log(`Value: ${this.myForm.controls.mySwitch.value}`);
  }
}
