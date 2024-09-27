export class DepartamentoMantenimiento {
  notificar(nombreEquipo: string, tiempoUso: number): void {
    console.log(
      `El equipo ${nombreEquipo} ha alcanzado ${tiempoUso} horas de uso y necesita mantenimiento preventivo.`
    );
  }
}
