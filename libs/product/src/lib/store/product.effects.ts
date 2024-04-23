import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {productActions} from './product.action';
import { ProductService } from './product.service';

export const loadProductsByCategory = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.loadProductByCategory),
      mergeMap((action) => {
        return  productService.getProductByCategory(action.category).pipe(
          map((products) => productActions.productSuccess({ products })),
          catchError((error) =>
            of(productActions.productFailure({ error }))
          )
        )}
      )
    );
  },
  { functional: true }
);

export const loadProducts = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.loadProduct),
      exhaustMap(() => {
        return  productService.getProducts().pipe(
          map((products) => productActions.productSuccess({ products })),
          catchError((error) =>
            of(productActions.productFailure({ error }))
          )
        )}
      )
    );
  },
  { functional: true }
);
