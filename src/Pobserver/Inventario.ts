import { InterfazUsuario } from "./InterfazUsuario";

export class Inventario {
  private equipos: string[] = [];
  private observadores: InterfazUsuario[] = [];

  agregarObservador(observador: InterfazUsuario): void {
    this.observadores.push(observador);
  }

  agregarEquipo(equipo: string): void {
    this.equipos.push(equipo);
    this.notificarObservadores();
  }

  eliminarEquipo(equipo: string): void {
    this.equipos = this.equipos.filter((e) => e !== equipo);
    this.notificarObservadores();
  }

  modificarEquipo(index: number, nuevoNombre: string): void {
    if (index >= 0 && index < this.equipos.length) {
      this.equipos[index] = nuevoNombre;
      this.notificarObservadores();
    }
  }

  private notificarObservadores(): void {
    this.observadores.forEach((observador) =>
      observador.actualizar([...this.equipos])
    );
  }
}
