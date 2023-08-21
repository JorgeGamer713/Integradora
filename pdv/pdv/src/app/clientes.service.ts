// frontend/src/app/productos.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  agregarClientes(cliente: Cliente): Observable<any> {
    return this.http.post<any>(this.apiUrl, cliente);
  }

  actualizarClientes(id: number, cliente: Cliente): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, cliente);
  }

  eliminarClientes(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
