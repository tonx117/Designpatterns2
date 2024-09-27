import { Monitor, Impresora, Proyector } from "./Perifericos";

class PerifericoSalidaFactory {
  static crearPeriferico(tipo: string, resolucion: string, marca: string) {
    switch (tipo) {
      case "Monitor":
        return new Monitor(resolucion, marca);
      case "Impresora":
        return new Impresora(resolucion, marca);
      case "Proyector":
        return new Proyector(resolucion, marca);
      default:
        throw new Error("Tipo de periférico no soportado");
    }
  }
}

export default PerifericoSalidaFactory;