import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from './models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private apiUrl = 'http://localhost:3000/ventas';

  constructor(private http: HttpClient) {}

  getVenta(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.apiUrl);
  }

  agregarVenta(venta: Venta): Observable<any> {
    return this.http.post<any>(this.apiUrl, venta);
  }

  actualizarVenta(id: number, venta: Venta): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, venta);
  }

  eliminarVenta(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
