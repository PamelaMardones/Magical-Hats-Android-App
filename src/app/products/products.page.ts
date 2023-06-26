import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {
  products: Producto[] = [
    new Producto(
      1,
      'Yu-Gi-Oh! Cyberstorm Access Booster Box Inglés',
      94990,
      'assets/img/Yu-Gi-Oh! Cyberstorm Access Booster Box.jpg',
      'El lote de expansión Acceso Cibertormenta contiene 100 cartas nuevas: 50 Cartas Comunes, 26 Cartas Súper Raras, 14 Cartas Ultra Raras, 10 Cartas Raras Secretas.'
    ),
    new Producto(
      2,
      'Speed Duel GX: Duelists of Shadows Español',
      29990,
      'assets/img/Speed Duel GX Duelists of Shadows.jpeg',
      'Cada Speed Duel GX: Duelistas de las Sombras contiene un total de 228 cartas, todas aptas para Speed Duel: 200 Cartas Comunes, 20 Cartas de Habilidad, 8 (de 24) cartas Secretas Raras 3 de las 8 Raras Secretas en cada caja serán 3 Bestias Sagradas: Uria, Señor de las Llamas Abrasadoras; Hamon, Señor del Trueno Golpeador y Raviel, Señor de Fantasmas.'
    ),
    new Producto(
      3,
      'Structure Deck: Beware of Traptrix Español',
      12990,
      'assets/img/Structure Deck Beware of Traptrix ESPAÑOL.jpg',
      'La nueva Baraja de Estructura: Cuidado con la Atrapadora también te da otra oportunidad de conseguir Cartas Trampa emblemáticas y muchas cartas “Agujero Trampa”. Atrae a tus adversarios a un bonito festín, donde regresar no es una opción.'
    ),
    new Producto(
      4,
      'Magnificent Mavens Inglés',
      26990,
      'assets/img/Magnificent Mavens.jpg',
      'Cada caja de Expertas Magníficas contiene: 1 paquete de 70 fundas de cartas (1 de 6 nuevos diseños de funda para Caza del Cielo, Mayakashis o Artibrujas) 4 sobres con 5 cartas Ultra Raras por sobre.'
    ),
    new Producto(
      5,
      'Mega Tin 2022 of the Pharaoh’s Gods Español',
      23990,
      'assets/img/Mega Tin 2022 of the Pharaoh’s Gods.jpg',
      'Cada 2022 Lata de los Dioses del Faraón contiene 3 Mega Packs extra grandes, cada uno con 1 Rara Secreta Prismática, 2 Ultra Raras, 2 Súper Raras, 1 Rara y 12 Comunes de un enorme mega paquete. Cada lata contiene en total: 3 Cartas Raras Secretas Prismáticas, 6 Cartas Ultra Raras, 6 Cartas Súper Raras, 3 Cartas Raras y 36 Cartas Comunes.'
    )
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Producto) {
    this.cartService.addToCart(product);
  }
  removeFromCart(product: Producto) {
    this.cartService.removeFromCart(product);
  }
}