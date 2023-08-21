import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tipo } from './models/tipo';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  private apiUrl = 'http://localhost:3000/tipos';

  constructor(private http: HttpClient) {}

  getTipo(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(this.apiUrl);
  }

  agregarTipo(tipo: Tipo): Observable<any> {
    return this.http.post<any>(this.apiUrl, tipo);
  }

  actualizarTipo(id: number, tipo: Tipo): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, tipo);
  }

  eliminarTipo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
