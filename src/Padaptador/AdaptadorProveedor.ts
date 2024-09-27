import { IProveedor } from "./IProveedor";
import { ProveedorExternoAPI } from "./ProveedorExternoAPI";

export class AdaptadorProveedor implements IProveedor {
  private proveedorExternoAPI: ProveedorExternoAPI;

  constructor() {
    this.proveedorExternoAPI = new ProveedorExternoAPI();
  }

  obtenerProductos(): string[] {
    return this.proveedorExternoAPI.fetchProductos();
  }

  actualizarInventario(producto: string, cantidad: number): string {
    return this.proveedorExternoAPI.updateStock(producto, cantidad);
  }
}
