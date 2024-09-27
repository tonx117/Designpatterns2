import Configuracion from "./Psingleton";
import ConexionDB from "./ConexionDB";

console.log("Patron Singleton");


const config = Configuracion.obtenerInstancia();
console.log("Idioma actual:", config.obtenerIdioma());
const configure = Configuracion.obtenerInstancia();
configure === config ? console.log('Misma Instancia') : console.log('Distinta Instancia')

const conexion = ConexionDB.obtenerInstancia();
conexion.conectar();
conexion.desconectar();
