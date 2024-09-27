class Configuracion {
  private static instancia: Configuracion;
  private idioma: string;
  private rutaBaseDatos: string;
  private nivelRegistro: string;

  // Constructor privado para evitar instanciación directa
  private constructor() {
    this.idioma = "español";
    this.rutaBaseDatos = "localhost:5432/inventario";
    this.nivelRegistro = "info";
  }

  // Método estático para obtener la instancia única
  public static obtenerInstancia(): Configuracion {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion();
    }
    return Configuracion.instancia;
  }

  // Métodos para obtener y actualizar las propiedades
  public obtenerIdioma(): string {
    return this.idioma;
  }

  public actualizarIdioma(nuevoIdioma: string): void {
    this.idioma = nuevoIdioma;
  }

  public obtenerRutaBaseDatos(): string {
    return this.rutaBaseDatos;
  }

  public actualizarRutaBaseDatos(nuevaRuta: string): void {
    this.rutaBaseDatos = nuevaRuta;
  }

  public obtenerNivelRegistro(): string {
    return this.nivelRegistro;
  }

  public actualizarNivelRegistro(nuevoNivel: string): void {
    this.nivelRegistro = nuevoNivel;
  }
}

export default Configuracion;
