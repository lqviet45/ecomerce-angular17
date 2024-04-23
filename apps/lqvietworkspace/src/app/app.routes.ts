import { Route } from '@angular/router';
import { provideState } from '@ngrx/store';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { loadProducts, loadProductsByCategory, productFeature } from '@org/product';
import { provideEffects } from '@ngrx/effects';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadComponent: () => import('@org/product')
      .then((m) => m.ProductComponent),
    providers: [
      provideState(productFeature),
      provideEffects({loadProducts})
    ]
  },
  {
    path: 'product/:categoryName',
    loadComponent: () => import('@org/product')
      .then((m) => m.ProductComponent),
    providers: [provideState(productFeature),
      provideEffects({loadProducts, loadProductsByCategory})]
    // data: {
    //   animation: 'CategoryPage',
    // },
  },
];
