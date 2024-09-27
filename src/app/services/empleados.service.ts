import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Empleado } from '../interfaces/empleado.interface';

type RequestBody = { nombre: string, apellidos: string, email: string, telefono: string, departamento: string, salario: number };

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private baseUrl: string = 'https://crm-empleados.onrender.com/api/empleados'

  private httpClient = inject(HttpClient);

  getAll() {
    return lastValueFrom(
      this.httpClient.get<Empleado[]>(this.baseUrl, this.createHeaders())
    );
  }

  getById(empleadoId: string) {
    return lastValueFrom(
      this.httpClient.get<Empleado>(`${this.baseUrl}/${empleadoId}`, this.createHeaders())
    );
  }

  create(body: RequestBody) {
    return lastValueFrom(
      this.httpClient.post<Empleado>(this.baseUrl, body, this.createHeaders())
    )
  }

  deleteById(empleadoId: string) {
    return lastValueFrom(
      this.httpClient.delete<Empleado>(`${this.baseUrl}/${empleadoId}`, this.createHeaders())
    )
  }

  createHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('crm_token')!
      })
    }
    return httpOptions;
  }

}
