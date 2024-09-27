import { Component, inject } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../interfaces/empleado.interface';
import { CardEmpleadoComponent } from '../../components/card-empleado/card-empleado.component';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [CardEmpleadoComponent],
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent {

  arrEmpleados: Empleado[] = [];

  empleadosService = inject(EmpleadosService);

  async ngOnInit() {
    this.arrEmpleados = await this.empleadosService.getAll();
  }

  async onEmpleadoBorrado($event: string) {
    this.arrEmpleados = await this.empleadosService.getAll();
  }

}
