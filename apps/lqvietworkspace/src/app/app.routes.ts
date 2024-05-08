import { Route } from '@angular/router';
import { provideState } from '@ngrx/store';
import { loadProducts, loadProductsByCategory, productFeature } from '@org/product';
import { provideEffects } from '@ngrx/effects';
import { cartFeature, loadCart } from '@org/cart';

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
  {
    path: 'cart',
    loadComponent: () => import('@org/cart')
      .then((m) => m.CartComponent),
    providers: [
      provideState(cartFeature),
      provideEffects({loadCart})
    ]
  }
];
