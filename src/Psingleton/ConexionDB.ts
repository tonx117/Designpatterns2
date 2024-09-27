class ConexionDB {
  private static instancia: ConexionDB;
  private host: string;
  private puerto: number;
  private usuario: string;
  private conectado: boolean;


  private constructor() {
    this.host = "localhost";
    this.puerto = 5432;
    this.usuario = "admin";
    this.conectado = false;
  }


  public static obtenerInstancia(): ConexionDB {
    if (!ConexionDB.instancia) {
      ConexionDB.instancia = new ConexionDB();
    }
    return ConexionDB.instancia;
  }


  public conectar(): void {
    if (!this.conectado) {
      console.log(
        `Conectando a la base de datos en ${this.host}:${this.puerto} como ${this.usuario}`
      );
      this.conectado = true;
    } else {
      console.log("Ya estás conectado a la base de datos.");
    }
  }

  public desconectar(): void {
    if (this.conectado) {
      console.log("Desconectando de la base de datos... \n");
      this.conectado = false;
    } else {
      console.log("No estabas conectado a la base de datos.");
    }
  }

  
  public actualizarHost(nuevoHost: string): void {
    this.host = nuevoHost;
  }

  public actualizarPuerto(nuevoPuerto: number): void {
    this.puerto = nuevoPuerto;
  }

  public actualizarUsuario(nuevoUsuario: string): void {
    this.usuario = nuevoUsuario;
  }
}

export default ConexionDB;
