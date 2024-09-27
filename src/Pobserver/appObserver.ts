import { DepartamentoMantenimiento } from "./DepartamentoMantenimiento";
import { Equipo } from "./Equipo";
import { InterfazUsuario } from "./InterfazUsuario";
import { Inventario } from "./Inventario";

console.log("Patron Observer");

const mantenimiento = new DepartamentoMantenimiento();
const equipo1 = new Equipo("Servidor HP", "Servidor", "Operativo", 950, 1000);

equipo1.agregarObservador(mantenimiento);


equipo1.incrementarTiempoUso(60);


const interfaz1 = new InterfazUsuario();
const interfaz2 = new InterfazUsuario();
const inventario = new Inventario();

inventario.agregarObservador(interfaz1);
inventario.agregarObservador(interfaz2);


inventario.agregarEquipo("Notebook Dell");
inventario.agregarEquipo("Servidor HP");
inventario.eliminarEquipo("Notebook Dell");
inventario.modificarEquipo(0, "Servidor IBM");
