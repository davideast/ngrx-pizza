import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatListModule, 
  MatButtonModule, 
  MatGridListModule, 
  MatToolbarModule,
  MatIconModule,
  MatCardModule } from '@angular/material';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { PizzaGridComponent } from './pizza-grid/pizza-grid.component';

const MaterialModules = [
  BrowserAnimationsModule,
  MatListModule,
  MatButtonModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaDetailComponent,
    PizzaGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    ...MaterialModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
