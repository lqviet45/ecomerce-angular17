import { createFeature, createFeatureSelector, createSelector } from '@ngrx/store';
import { cartReducer, CartState } from './cart.reducer';

const cartFeatureKey = 'cart';

export const selectCartState = createFeatureSelector<CartState>(cartFeatureKey);

export const selectCarts = createSelector(
  selectCartState,
  (state: CartState) => state.carts
);

export const selectError = createSelector(
  selectCartState,
  (state: CartState) => state.error
)

export const cartFeature = createFeature({
  name: cartFeatureKey,
  reducer: cartReducer,
});
