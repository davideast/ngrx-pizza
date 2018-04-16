import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { initialState, Order } from '../models';

@Component({
  selector: 'pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.css']
})
export class PizzaOrderComponent implements OnInit {
  order: Order;
  pastOrders: Order[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const orderId = this.route.snapshot.params.id;
    this.order = initialState.activeOrders.find(o => o.id === orderId);
    this.pastOrders = initialState.pastOrders.filter(o => o.uid === this.order.uid);
  }

}
