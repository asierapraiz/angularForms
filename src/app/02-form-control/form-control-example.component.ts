import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control-example',
  templateUrl: './form-control-example.component.html'
})
export class FormControlExampleComponent {
  name = new FormControl('Angular Forms Rock!');
}
