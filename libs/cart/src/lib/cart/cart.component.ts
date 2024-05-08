import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { cartActions } from '../store/cart.action';
import { selectCarts } from '../store/cart.selector';

@Component({
  selector: 'lib-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cart$ = this.store.select(selectCarts);

  constructor(private readonly store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(cartActions.loadCart());
  }
}
