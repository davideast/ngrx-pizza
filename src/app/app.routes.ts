import { Routes, RouterModule } from '@angular/router';
import { PizzaDashboardComponent } from './pizza-dashboard/pizza-dashboard.component';
import { PizzaOrderComponent } from './pizza-order/pizza-order.component';

const ROUTES: Routes = [
  { path: '', component: PizzaDashboardComponent },
  { path: 'pizza/:id', component: PizzaOrderComponent },
];

export const AppRoutes = RouterModule.forRoot(ROUTES);
