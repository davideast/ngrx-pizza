import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  @Input() orders: Order[];
  @Input() type: 'active' | 'past';
  
  constructor(private router: Router) { }

  ngOnInit() { }

  calcTotal(order: Order) {
    return order.pizzas
      .map(p => p.price)
      .reduce((acc, curr) => acc + curr);
  }

  getPizzaList(order: Order) {
    return order.pizzas
      .map(p => p.name)
      .reduce((acc, curr) => `${acc}, ${curr}`);
  }

  routeTo(order: Order) {
    debugger;
    this.router.navigateByUrl(`pizza/${order.id}`);
  }

}
