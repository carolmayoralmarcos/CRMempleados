import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  router = inject(Router);
  usuariosService = inject(UsuariosService);

  onClickLogout() {
    // Alerta de confirmación
    localStorage.removeItem('crm_token');
    this.router.navigateByUrl('/login');
  }

}

