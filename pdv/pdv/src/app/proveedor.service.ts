import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from './models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private apiUrl = 'http://localhost:3000/proveedores';

  public proveedor : Proveedor =
  {
    id_proovedor: 0,
    proveedor: '',
    telefono: '',
    correo: ''
  }

  public provedores: Proveedor []=[];

  constructor(private http: HttpClient) {}

  getProveedor(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.apiUrl);
  }

  agregarProveedor(proveedor: Proveedor): Observable<any> {
    return this.http.post<any>(this.apiUrl, proveedor);
  }

  actualizarProveedor(id: number, proveedor: Proveedor): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, proveedor);
  }

  eliminarProveedor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
