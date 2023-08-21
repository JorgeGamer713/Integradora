// categorias.component.ts

import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/categorias.service';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[] = [];
  categoria: Categoria = { id_categoria: 0, categoria: '' };

  constructor(private categoriasService: CategoriasService) {}

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(): void {
    this.categoriasService.getCategorias().subscribe(
      categorias => {
        this.categorias = categorias;
      },
      error => {
        console.error('Error al obtener las categorías:', error);
      }
    );
  }

  agregarCategoria(): void {
    this.categoriasService.agregarCategoria(this.categoria).subscribe(
      response => {
        console.log(response.message);
        this.obtenerCategorias();
        this.categoria = { id_categoria: 0, categoria: '' };
      },
      error => {
        console.error('Error al agregar la categoría:', error);
      }
    );
  }

  eliminarCategoria(id: number): void {
    this.categoriasService.eliminarCategoria(id).subscribe(
      response => {
        console.log(response.message);
        this.obtenerCategorias();
      },
      error => {
        console.error('Error al eliminar la categoría:', error);
      }
    );
  }
}

