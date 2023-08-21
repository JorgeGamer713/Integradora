// frontend/src/app/productos.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:3000/productos';

  public producto : Producto =
  {
    id_producto: 0,
    descripcion: '',
    id_proovedor: 0,
    proveedor: '',
    id_categoria: 0,
    precio_unit: 0,
    existencias: 0,
    stock_minimo: 0
  }
 public productos: Producto []=[];
  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  agregarProducto(producto: Producto): Observable<any> {
    return this.http.post<any>(this.apiUrl, producto);
  }

  actualizarProducto(id: number, producto: Producto): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, producto);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}