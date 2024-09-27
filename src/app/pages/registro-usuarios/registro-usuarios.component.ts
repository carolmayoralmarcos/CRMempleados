import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { UsuariosService } from '../../services/usuarios.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuarios',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, DropdownModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './registro-usuarios.component.html',
  styleUrl: './registro-usuarios.component.css'
})
export class RegistroUsuariosComponent {

  formulario: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  usuariosService = inject(UsuariosService);
  router = inject(Router);

  async onSubmit() {
    try {
      const response = await this.usuariosService.registro(this.formulario.value);

      // Mostrar alerta indicando del registro correcto
      Swal.fire('Registro', 'Te has registrado correctamente', 'success');

      // Navegar al login
      this.router.navigateByUrl('/login');

    } catch (error: any) {
      Swal.fire('Error', 'Revisa los campos del formulario', 'error');
    }
  }

}
