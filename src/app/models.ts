export interface Pizza {
  id: string;
  name: string;
  price: number;
}

export interface Order {
  id: string;
  address: string;
  pizzas: Pizza[];
}

export interface AppState {
  activeOrders: Order[];
  pastOrders?: Order[];
  pizzas: Pizza[];
}

export const initialState: AppState = {
  activeOrders: [{
    id: '0',
    address: '1111 Main St',
    pizzas: [{ id: 'ng-slice', name: 'Ng Slice', price: 9.99 }]
  }],
  pastOrders: [],
  pizzas: [{ id: 'ng-slice', name: 'Ng Slice', price: 9.99 }],
};
