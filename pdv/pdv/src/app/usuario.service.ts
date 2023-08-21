import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  agregarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario);
  }

  actualizarUsuario(id: number, usuario: Usuario): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, usuario);
  }

  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
