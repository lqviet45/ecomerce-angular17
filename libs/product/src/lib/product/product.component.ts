import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { productActions } from '../store/product.action';
import { selectProducts } from '../store/product.selector';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'lib-product',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {

  @Input() set categoryName(name: string) {
    if (name) {
      this.store.dispatch(
        productActions.loadProductByCategory({ category: name }
        ));
      return;
    }

    this.store.dispatch(productActions.loadProduct());
  }

  product$ = this.store.select(selectProducts);

  constructor(private readonly store: Store) {
  }

  ngOnInit() {
    //this.store.dispatch(productActions.loadProduct());
  }
}
