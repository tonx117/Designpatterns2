import {Teclado,Raton,Scanner} from "./Dispositivos";

class DispositivoEntradaFactory {
  static crearDispositivo(tipo: string) {
    switch (tipo) {
      case "Teclado":
        return new Teclado("USB", "Logitech");
      case "Raton":
        return new Raton("Inalámbrico", "Microsoft");
      case "Scanner":
        return new Scanner("USB", "Epson");
      default:
        throw new Error("Tipo de dispositivo no soportado");
    }
  }
}

export default DispositivoEntradaFactory;
