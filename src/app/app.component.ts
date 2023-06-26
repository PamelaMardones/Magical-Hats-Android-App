import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: 'login', icon: 'log-in' },
    { title: 'Register', url: 'register', icon: 'book' },
    { title: 'Productos', url: 'products', icon: 'bag' },
    { title: 'Carrito', url: 'cart', icon: 'cart' },
    { title: 'Completar pedido', url: 'my-shopping', icon: 'pricetags' }

  ];
}
