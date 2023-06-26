export class Producto {
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
    descripcion: string;
  
    constructor(id: number, nombre: string, precio: number, imagen: string, descripcion: string) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
      this.descripcion = descripcion;
    }
  
    static fromCarritoItem(carritoItem: any): Producto {
      return new Producto(
        carritoItem.id,
        carritoItem.nombre,
        carritoItem.precio,
        carritoItem.imagen,
        carritoItem.descripcion
      );
    }
  }