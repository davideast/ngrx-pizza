import { Component, OnInit } from '@angular/core';
import { initialState, AppState } from '../models';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs';

@Component({
  selector: 'pizza-dashboard',
  templateUrl: './pizza-dashboard.component.html',
  styleUrls: ['./pizza-dashboard.component.css']
})
export class PizzaDashboardComponent implements OnInit {

  state: AppState;

  ngOnInit() {
    this.state = initialState;
  }

}
