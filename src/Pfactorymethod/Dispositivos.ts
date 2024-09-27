export class Teclado {
  tipoConexion: string;
  marca: string;

  constructor(tipoConexion: string, marca: string) {
    this.tipoConexion = tipoConexion;
    this.marca = marca;
  }

  detalles() {
    return `Teclado: ${this.marca}, Conexión: ${this.tipoConexion}`;
  }
}

export class Raton {
  tipoConexion: string;
  marca: string;

  constructor(tipoConexion: string, marca: string) {
    this.tipoConexion = tipoConexion;
    this.marca = marca;
  }

  detalles() {
    return `Ratón: ${this.marca}, Conexión: ${this.tipoConexion}`;
  }
}

export class Scanner {
  tipoConexion: string;
  marca: string;

  constructor(tipoConexion: string, marca: string) {
    this.tipoConexion = tipoConexion;
    this.marca = marca;
  }

  detalles() {
    return `Scanner: ${this.marca}, Conexión: ${this.tipoConexion}`;
  }
}

