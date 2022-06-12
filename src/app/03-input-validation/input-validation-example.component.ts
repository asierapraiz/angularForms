import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-validation-example',
  templateUrl: './input-validation-example.component.html'
})
export class InputValidationExampleComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
}
