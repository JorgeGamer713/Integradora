import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private apiUrl = 'http://localhost:3000/categorias';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }

  agregarCategoria(categoria: Categoria): Observable<any> {
    return this.http.post(this.apiUrl, categoria);
  }

  eliminarCategoria(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
