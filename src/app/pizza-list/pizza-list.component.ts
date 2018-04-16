import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initialState, Order } from '../models';
import { Observable } from 'rxjs/Observable';
import { MAT_SORT_HEADER_INTL_PROVIDER } from '@angular/material';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  activeOrders: Order[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.activeOrders = initialState.activeOrders;
  }

  calcTotal(order: Order) {
    return order.pizzas
      .map(p => p.price)
      .reduce((acc, curr) => acc + curr);
  }

  routeTo(order: Order) {
    this.router.navigateByUrl(`pizza/${order.id}`);
  }

}
