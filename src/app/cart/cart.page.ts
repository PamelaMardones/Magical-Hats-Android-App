import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: Producto[] = [];

  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(product: Producto) {
    this.cartService.removeFromCart(product);
  }

  irACompletarPedido() {
    this.router.navigate(['/my-shopping']);
  }
}






