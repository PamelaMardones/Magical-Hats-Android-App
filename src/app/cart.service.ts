import { Injectable } from '@angular/core';
import { Producto } from './models/producto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Producto[] = [];
  totalValue: number = 0;

  constructor() { }

  addToCart(product: Producto) {
    this.cartItems.push(product);
    this.calculateTotalValue();
  }

  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(product: Producto) {
    const index = this.cartItems.indexOf(product);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.calculateTotalValue();
    }
  }

  calculateTotalValue() {
    this.totalValue = this.cartItems.reduce((total, item) => total + item.precio, 0);
  }

  clearCart() {
    this.cartItems = [];
    this.totalValue = 0;
  }
}