export class Monitor {
  resolucion: string;
  marca: string;

  constructor(resolucion: string, marca: string) {
    this.resolucion = resolucion;
    this.marca = marca;
  }

  detalles() {
    return `Monitor: ${this.marca}, Resolución: ${this.resolucion}`;
  }
}

export class Impresora {
  tipoImpresion: string;
  marca: string;

  constructor(tipoImpresion: string, marca: string) {
    this.tipoImpresion = tipoImpresion;
    this.marca = marca;
  }

  detalles() {
    return `Impresora: ${this.marca}, Tipo: ${this.tipoImpresion}`;
  }
}

export class Proyector {
  resolucion: string;
  marca: string;

  constructor(resolucion: string, marca: string) {
    this.resolucion = resolucion;
    this.marca = marca;
  }

  detalles() {
    return `Proyector: ${this.marca}, Resolución: ${this.resolucion}`;
  }
}
