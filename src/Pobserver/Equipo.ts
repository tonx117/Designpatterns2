import { DepartamentoMantenimiento } from "./DepartamentoMantenimiento";

export class Equipo {
  private observadores: DepartamentoMantenimiento[] = [];

  constructor(
    public nombre: string,
    public tipo: string,
    public estado: string,
    public tiempoUso: number,
    private umbralMantenimiento: number
  ) {}

  agregarObservador(observador: DepartamentoMantenimiento): void {
    this.observadores.push(observador);
  }

  incrementarTiempoUso(horas: number): void {
    this.tiempoUso += horas;
    if (this.tiempoUso >= this.umbralMantenimiento) {
      this.notificarObservadores();
    }
  }

  private notificarObservadores(): void {
    this.observadores.forEach((observador) =>
      observador.notificar(this.nombre, this.tiempoUso)
    );
  }
}
