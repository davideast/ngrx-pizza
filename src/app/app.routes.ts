import { Routes, RouterModule } from '@angular/router';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';

const ROUTES: Routes = [
  { path: '', component: PizzaListComponent },
  { path: 'pizza/:id', component: PizzaDetailComponent },
];

export const AppRoutes = RouterModule.forRoot(ROUTES);
