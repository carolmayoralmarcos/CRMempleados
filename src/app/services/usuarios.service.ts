import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

type RegistroBody = { username: string, email: string, password: string };
type LoginBody = { email: string, password: string };

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string = 'https://crm-empleados.onrender.com/api/usuarios';

  private httpClient = inject(HttpClient);

  registro(body: RegistroBody) {
    return lastValueFrom(
      this.httpClient.post<{ success: string }>(`${this.baseUrl}/registro`, body)
    );
  }

  login(body: LoginBody) {
    return lastValueFrom(
      this.httpClient.post<{ success: string, token: string }>(`${this.baseUrl}/login`, body)
    );
  }

  isLogged() {
    const token = localStorage.getItem('crm_token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

}
