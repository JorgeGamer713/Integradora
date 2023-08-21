// frontend/src/app/productos.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detalle } from './models/detalle-venta';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {
  private apiUrl = 'http://localhost:3000/detalleventa';
  
  public detalle: Detalle= 
  {
    id_detalle: 0,
    id_venta: 0,
    id_producto: 0,
    cantidad:0,
    descripcion: '',
    precio_unit: 0,
    
}

public detalles: Detalle []=[];


  constructor(private http: HttpClient) {}

  getDetalle(): Observable<Detalle[]> {
    return this.http.get<Detalle[]>(this.apiUrl);
  }

  getDetalleById(id:number): Observable<Detalle[]> {
    return this.http.get<Detalle[]>(this.apiUrl+'/'+id);
  }
  

  agregarDetalle(detalle: Detalle): Observable<any> {
    return this.http.post<any>(this.apiUrl, detalle);
  }

  actualizarDetalle(id: number, detalle: Detalle): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, detalle);
  }

  eliminarDetalle(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

/*   calcularTotalVenta(): number {
    let total = 0;
    for (const detalle of this.detalles) {
      total += detalle.cantidad * detalle.precio_unit;
    }
    return total;
  } */
}


