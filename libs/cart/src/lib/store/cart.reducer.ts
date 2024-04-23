import { Cart, cartActions } from './cart.action';
import { createReducer, on } from '@ngrx/store';

export interface CartState {
  carts: Cart[];
  //totalPrice: number;
  error: string;
}

export const initialCartState: CartState = {
  carts: [],
  //totalPrice: 0,
  //loading: false,
  error: ''
};

export const cartReducer = createReducer(
  initialCartState,
  on(cartActions.loadCartSuccess, (state, action) => {
    return {
      ...state,
      carts: action.carts,
      //loading: false,
      error: ''
    }
  }),
  on(cartActions.loadCartFailure, (state, action) => {
    return {
      ...state,
      carts: [],
      //loading: false,
      error: action.error
    }
  })
);
