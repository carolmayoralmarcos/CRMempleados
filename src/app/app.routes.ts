import { Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { NuevoEmpleadoComponent } from './pages/nuevo-empleado/nuevo-empleado.component';
import { RegistroUsuariosComponent } from './pages/registro-usuarios/registro-usuarios.component';
import { LoginUsuariosComponent } from './pages/login-usuarios/login-usuarios.component';
import { DetalleEmpleadoComponent } from './pages/detalle-empleado/detalle-empleado.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'empleados',
        component: ListaEmpleadosComponent,
        canActivate: [authGuard]
    },
    {
        path: 'empleados/nuevo',
        component: NuevoEmpleadoComponent,
        canActivate: [authGuard]
    },
    { path: 'empleados/:empleadoId', component: DetalleEmpleadoComponent },
    { path: 'registro', component: RegistroUsuariosComponent },
    { path: 'login', component: LoginUsuariosComponent }
];