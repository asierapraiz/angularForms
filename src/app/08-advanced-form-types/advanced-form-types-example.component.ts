import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-advanced-form-types-example',
  templateUrl: './advanced-form-types-example.component.html'
})
export class AdvancedFormTypesExampleComponent implements OnInit, AfterViewInit{

  @ViewChild('addBtn', {static: true}) addBtn!: ElementRef;
  
  form: FormGroup;
showTest = false;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [''],
      color: ['#ff0000'],
      password: [''],
      age: [100],
      date: [new Date()],
      subscribe: [true],
      memory: [32],
      distance: [50],
      region: ['south-america']
    });
  }
  ngAfterViewInit(): void {
    fromEvent(this.addBtn.nativeElement, 'click')
    .subscribe((res) => {
      this.showTest=true;
    })
  }

  ngOnInit(): void {
    
  }

  _showTest(){
    this.showTest=true;
  }

  submit() {
    console.log(this.form.value);
  }
}
