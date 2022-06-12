import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { OrderService, Order } from './order.service';

@Component({
  selector: 'app-dynamic-form-controls-example',
  templateUrl: './dynamic-form-controls-example.component.html'
})
export class DynamicFormControlsExampleComponent {
  form: FormGroup;
  orders: Observable<Order[]>;

  constructor(private formBuilder: FormBuilder, private orderService: OrderService) {
    this.form = this.formBuilder.group({
      selectOrder: [],
      radioOrder: []
    });

    this.orders = this.orderService.loadOrders()
      .pipe(tap(orders => this.initializeFormValues(orders)));
  }

  initializeFormValues(orders: Order[]) {
    this.form.patchValue({
      selectOrder: orders[0].id,
      radioOrder: orders[0].id
    });
  }

  submit() {
    // with selects and radios the value is always returned as a string type
    console.log('select order: ', parseInt(this.form.value.selectOrder, 10));
    console.log('radio order: ', parseInt(this.form.value.radioOrder, 10));
  }
}
