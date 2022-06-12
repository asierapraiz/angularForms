import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService, ValidationErrorTypes } from './validation.service';

@Component({
  selector: 'app-validation-message',
  template: `<div *ngIf="errorMessage !== null" class="error">{{errorMessage}}</div>`
})
export class ValidationMessageComponent {
  @Input() control: FormControl | null = null;

  get errorMessage() {
    let errorMessage = null;

    if (this.control !== null) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
          errorMessage = ValidationService.getValidatorErrorMessage(propertyName as ValidationErrorTypes, this.control.errors[propertyName]);
        }
      }
    }

    return errorMessage;
  }
}
