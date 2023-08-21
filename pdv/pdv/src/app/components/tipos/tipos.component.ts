import { Component, OnInit } from '@angular/core';
import { TipoService} from 'src/app/tipo.service';
import { Tipo } from 'src/app/models/tipo';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.css']
})
export class TiposComponent implements OnInit {
  tipo: Tipo[] = [];
  tipos: Tipo = { id_tipo:0, tipo:''};

  constructor(private TipoService: TipoService) {}

  ngOnInit(): void {
    this.obtenerTipo();
  }
 
  obtenerTipo(): void {
    this.TipoService.getTipo().subscribe(
      tipo => {
        this.tipo= tipo;
      },
      error => {
        console.error('Error al obtener el tipo:', error);
      }
    );
  }

  agregarTipo(): void {
    this.TipoService.agregarTipo(this.tipos).subscribe(
      response => {
        console.log(response.message);
        this.obtenerTipo();
        this.tipos = { id_tipo:0, tipo:''};
      },
      error => {
        console.error('Error al agregar el tipo', error);
      }
    );
  }

  actualizarTipo(id: number): void {
    this.TipoService.actualizarTipo(id, this.tipos).subscribe(
      response => {
        console.log(response.message);
        this.obtenerTipo();
        this.tipos = { id_tipo:0, tipo:''};
      },
      error => {
        console.error('Error al actualizar el tipo:', error);
      }
    );
  }

  eliminarTipo(id: number): void {
    this.TipoService.eliminarTipo(id).subscribe(
      response => {
        console.log(response.message);
        this.obtenerTipo();
      },
      error => {
        console.error('Error al eliminar el tipo:', error);
      }
    );
  }
}
