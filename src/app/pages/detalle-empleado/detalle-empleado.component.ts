import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../interfaces/empleado.interface';

@Component({
  selector: 'app-detalle-empleado',
  standalone: true,
  imports: [],
  templateUrl: './detalle-empleado.component.html',
  styleUrl: './detalle-empleado.component.css'
})
export class DetalleEmpleadoComponent {

  empleado: Empleado | null = null;

  activatedRoute = inject(ActivatedRoute);
  empleadosService = inject(EmpleadosService);

  // Recuperar el id del empleado cuando arranca el componente
  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      // params['empleadoId'] -> El id del empleado
      const response = await this.empleadosService.getById(params['empleadoId']);
      this.empleado = response;
    });
  }

}
