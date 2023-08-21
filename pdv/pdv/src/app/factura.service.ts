import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from './models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private apiUrl = 'http://localhost:3000/facturas';

  constructor(private http: HttpClient) {}

  getFactura(): Observable<Factura[]> {
    return this.http.get<Factura[]>(this.apiUrl);
  }

  agregarFactura(factura: Factura): Observable<any> {
    return this.http.post<any>(this.apiUrl, factura);
  }

  actualizarFactura(id: number, factura: Factura): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, factura);
  }

  eliminarFactura(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
