import DispositivoEntradaFactory from "./DispositivoEntradaFactory";
import PerifericoSalidaFactory from "./PerifericosSalidaFactory";

const main = () => {
  // Crear dispositivos de entrada
  const teclado = DispositivoEntradaFactory.crearDispositivo("Teclado");
  const raton = DispositivoEntradaFactory.crearDispositivo("Raton");
  const scanner = DispositivoEntradaFactory.crearDispositivo("Scanner");

  console.log("Dispositivos de entrada creados:");
  console.log(teclado.detalles());
  console.log(raton.detalles());
  console.log(scanner.detalles());

  // Crear periféricos de salida
  const monitor = PerifericoSalidaFactory.crearPeriferico(
    "Monitor",
    "1920x1080",
    "Samsung"
  );
  const impresora = PerifericoSalidaFactory.crearPeriferico(
    "Impresora",
    "Inyección de tinta",
    "Epson"
  );
  const proyector = PerifericoSalidaFactory.crearPeriferico(
    "Proyector",
    "Full HD",
    "BenQ"
  );

  console.log("Periféricos de salida creados:");
  console.log(monitor.detalles());
  console.log(impresora.detalles());
  console.log(proyector.detalles());
};

// Ejecutar la función principal
main();
