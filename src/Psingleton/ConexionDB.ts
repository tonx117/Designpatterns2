class ConexionDB {
  private static instancia: ConexionDB;
  private host: string;
  private puerto: number;
  private usuario: string;
  private conectado: boolean;

  // Constructor privado para evitar instanciación directa
  private constructor() {
    this.host = "localhost";
    this.puerto = 5432;
    this.usuario = "admin";
    this.conectado = false;
  }

  // Método estático para obtener la instancia única
  public static obtenerInstancia(): ConexionDB {
    if (!ConexionDB.instancia) {
      ConexionDB.instancia = new ConexionDB();
    }
    return ConexionDB.instancia;
  }

  // Método para conectar a la base de datos
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

  // Método para desconectar la base de datos
  public desconectar(): void {
    if (this.conectado) {
      console.log("Desconectando de la base de datos...");
      this.conectado = false;
    } else {
      console.log("No estabas conectado a la base de datos.");
    }
  }

  // Métodos para actualizar la configuración de la conexión
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
