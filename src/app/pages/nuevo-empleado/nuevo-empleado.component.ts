import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import Swal from 'sweetalert2';

import { EmpleadosService } from '../../services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-empleado',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, DropdownModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './nuevo-empleado.component.html',
  styleUrl: './nuevo-empleado.component.css'
})
export class NuevoEmpleadoComponent {

  errores: { field: string, message: string }[] = [];
  departamentos = [
    { name: 'Recursos Humanos', code: 'recursoshumanos' },
    { name: 'Dirección', code: 'direccion' },
    { name: 'Desarrollo', code: 'desarrollo' },
    { name: 'Diseño', code: 'diseño' }
  ];
  formulario: FormGroup = new FormGroup({
    nombre: new FormControl(),
    apellidos: new FormControl(),
    email: new FormControl(),
    telefono: new FormControl(),
    departamento: new FormControl(),
    salario: new FormControl()
  });

  empleadosService = inject(EmpleadosService);
  router = inject(Router);

  async onSubmit() {
    if (this.formulario.value.departamento)
      this.formulario.value.departamento = this.formulario.value.departamento.code;

    try {
      const response = await this.empleadosService.create(this.formulario.value);

      // Avisar al usuario que se ha insertado correctamente
      await Swal.fire({
        title: 'Empleado creado correctamente',
        text: 'Se ha creado el empleado. Puedes verlo en la lista',
        icon: 'success'
      });

      // Navegar a la lista de empleados
      this.router.navigateByUrl('/empleados');
    } catch ({ error }: any) {
      this.errores = error;
    }
  }

}
