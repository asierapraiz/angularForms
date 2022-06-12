import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { UsernameService } from './username.service';

@Component({
  selector: 'app-async-validation-example',
  templateUrl: './async-validation-example.component.html'
})
export class AsyncValidationExampleComponent {
  form: FormGroup;

  get userName() {
    return this.form.controls.userName;
  }

  constructor(private formBuilder: FormBuilder, private usernameService: UsernameService) {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required, usernameAvailableValidator(this.usernameService)]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}

export function usernameAvailableValidator(usernameService: UsernameService) {
  return (control: FormControl): Observable<ValidationErrors | null> => {
    return usernameService.usernameAvailable(control.value).pipe(
      map(usernameAvailable => usernameAvailable ? null : { username: 'username taken' }),
      tap(v => console.log(v))
    );
  };
}
