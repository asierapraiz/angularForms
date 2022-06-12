import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { minSelectedCheckboxes } from './validators';
import { Order, OrderService } from '../11-dynamic-form-controls/order.service';

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html'
})
export class FormArrayExampleComponent {
  form: FormGroup;
  orders: Observable<Order[]>;

  get orderControls() {
    return (this.form.controls.orders as FormArray).controls;
  }

  constructor(private formBuilder: FormBuilder, private orderService: OrderService) {
    this.form = this.formBuilder.group({
      orders: new FormArray([], minSelectedCheckboxes(1))
    });

    this.orders = this.orderService.loadOrders()
      .pipe(tap(orders => this.addCheckboxes(orders)));
  }

  private addCheckboxes(orders: Order[]) {
    orders.map((_, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.orders as FormArray).push(control);
    });
  }

  submit(orders: Order[]) {
    const selectedOrderIds = (this.form.value.orders as Order[])
      .map((o, i) => o ? orders[i].id : null)
      .filter(v => v !== null);

    console.log('checkbox list orders: ', selectedOrderIds);
  }
}
