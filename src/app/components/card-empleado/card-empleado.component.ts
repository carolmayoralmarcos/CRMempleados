import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CardModule } from 'primeng/card';

import { Empleado } from '../../interfaces/empleado.interface';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'card-empleado',
  standalone: true,
  imports: [CardModule, DatePipe, CurrencyPipe, ButtonModule, RouterLink],
  templateUrl: './card-empleado.component.html',
  styleUrl: './card-empleado.component.css'
})
export class CardEmpleadoComponent {

  @Input() empleado: Empleado | null = null;

  @Output() empleadoBorrado: EventEmitter<string> = new EventEmitter();

  empleadosService = inject(EmpleadosService);

  async onClick(empleadoId: string) {
    // Confirmar el borrado con una alerta
    const result = await Swal.fire({
      title: 'Borrado de empleado',
      text: 'Esta acción es irreversible. ¿Estás segura/o?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, bórralo'
    });

    // En caso afirmativo realizar el borrado
    if (result.isConfirmed) {
      const response = await this.empleadosService.deleteById(empleadoId);
      Swal.fire('Borrado', 'Se ha borrado correctamente', 'success');
      // Aviso al padre (ListaEmpleados) que se ha borrado un empleado
      this.empleadoBorrado.emit(empleadoId);
    }

  }

}
