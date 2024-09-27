export class ProveedorExternoAPI {
  fetchProductos(): string[] {
    return ["Producto A", "Producto B", "Producto C"];
  }

  updateStock(producto: string, cantidad: number): string {
    return `Stock de ${producto} actualizado en ${cantidad} unidades.`;
  }
}
