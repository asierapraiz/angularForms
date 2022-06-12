import { Component } from '@angular/core';

@Component({
  selector: 'app-html-forms-example',
  templateUrl: './html-forms-example.component.html'
})
export class HtmlFormsExampleComponent {
  initialValue = 'Hello World';

  submit(event: any) {
    console.log(event);
  }
}
