import Configuracion from "./Psingleton";
import ConexionDB from "./ConexionDB";

// Obtener la instancia de Configuracion
const config = Configuracion.obtenerInstancia();
console.log("Idioma actual:", config.obtenerIdioma());
const configure = Configuracion.obtenerInstancia();
configure === config ? console.log('Misma Instancia') : console.log('Distinta Instancia')

// Obtener la instancia de ConexionDB
const conexion = ConexionDB.obtenerInstancia();
conexion.conectar();
conexion.desconectar();
