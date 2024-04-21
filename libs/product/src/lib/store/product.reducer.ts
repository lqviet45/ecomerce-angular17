import { createReducer, on } from '@ngrx/store';
import { Product, productActions } from './product.action';

export interface ProductState {
  products: Product[];
  productCount: number;
  //loading: boolean;
  error: string;
}

export const initialProductState: ProductState = {
  products: [],
  productCount: 0,
  //loading: false,
  error: ''
};

export const productReducer = createReducer(
  initialProductState,
  on(productActions.productSuccess, (state, action) => {
    return {
      ...state,
      products: action.products,
      productCount: action.products.length,
      //loading: false,
      error: ''
    }
  }),
  on(productActions.productFailure, (state, action) => {
    return {
      ...state,
      products: [],
      productCount: 0,
      //loading: false,
      error: action.error
    }
  })
);
