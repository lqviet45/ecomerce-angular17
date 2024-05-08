import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { cartActions } from './cart.action';
import { CartService } from '../service/cart.service';

export const loadCart = createEffect(
  (actions$ = inject(Actions), cartService = inject(CartService)) => {
    return actions$.pipe(
      ofType(cartActions.loadCart),
      exhaustMap(() => {
        return  cartService.getCarts().pipe(
          map((carts) => cartActions.loadCartSuccess({ carts })),
          catchError((error) =>
            of(cartActions.loadCartFailure({ error }))
          )
        )}
      )
    );
  },
  { functional: true }
);
