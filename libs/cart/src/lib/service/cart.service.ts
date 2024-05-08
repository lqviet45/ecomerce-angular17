import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../store/cart.action';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private readonly http: HttpClient) { }

  getCarts() {
    return this.http.get<Cart[]>(
      'https://fakestoreapi.com/carts'
    );
  }

  getProductByCategory(category: string) {
    return this.http.get<Cart[]>(
      `https://fakestoreapi.com/products/category/${category}`
    );
  }
}
