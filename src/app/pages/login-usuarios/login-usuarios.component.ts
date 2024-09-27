import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../services/usuarios.service';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuarios',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, DropdownModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './login-usuarios.component.html',
  styleUrl: './login-usuarios.component.css'
})
export class LoginUsuariosComponent {

  formulario: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  usuariosService = inject(UsuariosService);
  router = inject(Router);

  async onSubmit() {
    try {
      const response = await this.usuariosService.login(this.formulario.value);

      // Guardar el token en LocalStorage
      localStorage.setItem('crm_token', response.token);

      // Alerta de login correcto
      Swal.fire('Login', 'Login correcto.', 'success');

      // Redirección a la lista de empleados
      this.router.navigateByUrl('/empleados');

    } catch (error: any) {
      Swal.fire('Error', 'Revisa los campos del formulario', 'error');
    }
  }

}
