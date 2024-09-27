export interface IProveedor {
  obtenerProductos(): string[];
  actualizarInventario(producto: string, cantidad: number): string;
}
