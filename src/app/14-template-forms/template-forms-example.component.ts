import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms-example',
  templateUrl: './template-forms-example.component.html'
})
export class TemplateFormsExampleComponent {
  search = 'angular';

  submit(form: NgForm) {
    console.log(form.value);
  }
}
