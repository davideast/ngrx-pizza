export interface Pizza {
  id: string;
  name: string;
  price: number;
}

export interface Order {
  id: string;
  address: string;
  pizzas: Pizza[];
  uid: string;
}

export interface AppState {
  activeOrders: Order[];
  pastOrders?: Order[];
}

export const initialState: AppState = {
  activeOrders: [{
    id: '1',
    address: '1111 Main St',
    pizzas: [{ id: 'ng-slice', name: 'Ng Slice', price: 9.99 }],
    uid: 'david'
  }],
  pastOrders: [{
    id: '0',
    address: '1111 Main St',
    pizzas: [{ id: 'ng-slice', name: 'Ng Slice', price: 9.99 }, { id: 'rooter', name: 'Rooter/Router', price: 12.99 }],
    uid: 'david'
  }]
};
