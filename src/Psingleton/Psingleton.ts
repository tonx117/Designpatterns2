class Configuracion {
  private static instancia: Configuracion;
  private idioma: string;
  private rutaBaseDatos: string;
  private nivelRegistro: string;


  private constructor() {
    this.idioma = "español";
    this.rutaBaseDatos = "localhost:5432/inventario";
    this.nivelRegistro = "info";
  }

  
  public static obtenerInstancia(): Configuracion {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion();
    }
    return Configuracion.instancia;
  }


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
