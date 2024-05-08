import { createFeature, createFeatureSelector, createSelector } from '@ngrx/store';
import { productReducer, ProductState } from './product.reducer';

const productFeatureKey = 'product';

export const selectProductState = createFeatureSelector<ProductState>(productFeatureKey);
//(state: CategoryState) => state;

export const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);

export const selectProductsByCategory = (category: string) => createSelector(
  selectProductState,
  (state: ProductState) => state.products
    .filter(product => product.category === category)
);

export const selectError = createSelector(
  selectProductState,
  (state: ProductState) => state.error
)

export const productFeature = createFeature({
  name: productFeatureKey,
  reducer: productReducer,
});
