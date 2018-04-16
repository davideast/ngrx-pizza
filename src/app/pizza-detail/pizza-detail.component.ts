import { Component, Input } from '@angular/core';
import { Order } from '../models';

@Component({
  selector: 'pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent {

  @Input() order: Order;

  calcTotal(order: Order) {
    return order.pizzas
      .map(p => p.price)
      .reduce((acc, curr) => acc + curr);
  }

  complete(order: Order) {

  }

}
