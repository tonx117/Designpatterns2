import { IFacturacion } from "./IFacturacion";
import { FacturacionVieja } from "./FacturacionVieja";

export class AdaptadorFacturacion implements IFacturacion {
  private facturacionVieja: FacturacionVieja;

  constructor() {
    this.facturacionVieja = new FacturacionVieja();
  }

  generarFactura(id: number, monto: number): string {
    return this.facturacionVieja.crearFactura(id, monto);
  }

  consultarFactura(id: number): string {
    return this.facturacionVieja.obtenerFactura(id);
  }
}
