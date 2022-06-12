import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserService, User } from './user.service';

@Component({
  selector: 'app-forms-with-async-data-example',
  templateUrl: './forms-with-async-data-example.component.html'
})
export class FormsWithAsyncDataExampleComponent {
  form: FormGroup;
  user: Observable<User>;

  get firstName() {
    return this.form.controls.firstName;
  }

  get lastName() {
    return this.form.controls.lastName;
  }

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService) {
      this.form = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        about: []
      });
  
      this.user = this.userService.loadUser().pipe(
        tap(user => this.form.patchValue(user))
      );
    }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
