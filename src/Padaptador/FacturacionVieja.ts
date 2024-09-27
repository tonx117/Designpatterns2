export class FacturacionVieja {
  crearFactura(id: number, monto: number): string {
    return `Factura creada: ID ${id}, Monto $${monto}`;
  }

  obtenerFactura(id: number): string {
    return `Factura ID ${id} encontrada.`;
  }
}
