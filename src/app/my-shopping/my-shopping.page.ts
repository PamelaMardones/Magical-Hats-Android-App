import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CartService } from '../cart.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-my-shopping',
  templateUrl: './my-shopping.page.html',
  styleUrls: ['./my-shopping.page.scss'],
})
export class MyShoppingPage {

  direccion: string = '';
  ciudad: string = '';
  formaPago: string | undefined;
  carrito: Producto[] = []; 

  constructor(
    private alertController: AlertController,
    private router: Router,
    public cartService: CartService
  ) {
    this.carrito = this.cartService.getCartItems();
  }

  realizarCompra() {
    if (this.carrito.length === 0) {
      this.presentAlert('Carrito vacío', 'No hay productos en el carrito');
      return;
    }

    if (!this.direccion || !this.ciudad || !this.formaPago) {
      this.presentAlert('Datos incompletos', 'Por favor completa todos los campos para realizar la compra');
      return;
    }

    // Aquí puedes agregar la lógica para procesar la compra
    // Acceder a los elementos del carrito a través de this.carrito

    // Por ejemplo, mostrar una alerta con los detalles de la compra y redireccionar a una página de confirmación
    const mensaje = `Compra realizada:
      Dirección: ${this.direccion}
      Ciudad: ${this.ciudad}
      Forma de pago: ${this.formaPago}`;

    this.presentAlert('Compra realizada', mensaje);
    this.router.navigate(['/confirmacion-compra']);
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

}