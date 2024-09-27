export interface IFacturacion {
  generarFactura(id: number, monto: number): string;
  consultarFactura(id: number): string;
}
